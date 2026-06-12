from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import networkx as nx

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PipelineData(BaseModel):
    nodes: list
    edges: list

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
def parse_pipeline(data: PipelineData):

    num_nodes = len(data.nodes)
    num_edges = len(data.edges)

    graph = nx.DiGraph()

    for node in data.nodes:
        graph.add_node(node['id'])

    for edge in data.edges:
        graph.add_edge(
            edge['source'],
            edge['target']
        )

    is_dag = nx.is_directed_acyclic_graph(graph)

    return {
        'num_nodes': num_nodes,
        'num_edges': num_edges,
        'is_dag': is_dag
    }