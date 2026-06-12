// ui.js
// Displays the drag-and-drop UI
// --------------------------------------------------

import {
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react';

import ReactFlow, {
  Controls,
  Background,
  MiniMap,
} from 'reactflow';

import { shallow } from 'zustand/shallow';

import { useStore } from './store';

import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';

import { APINode } from './nodes/apiNode';
import { MathNode } from './nodes/mathNode';
import { FilterNode } from './nodes/filterNode';
import { DelayNode } from './nodes/delayNode';
import { ImageNode } from './nodes/imageNode';

import 'reactflow/dist/style.css';

const gridSize = 20;

const proOptions = {
  hideAttribution: true,
};

const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
  api: APINode,
  math: MathNode,
  filter: FilterNode,
  delay: DelayNode,
  image: ImageNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,

  getNodeID: state.getNodeID,
  addNode: state.addNode,

  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,

  undo: state.undo,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);

  const [reactFlowInstance, setReactFlowInstance] =
    useState(null);

  const {
    nodes,
    edges,

    getNodeID,
    addNode,

    onNodesChange,
    onEdgesChange,
    onConnect,

    undo,
  } = useStore(selector, shallow);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === 'z'
      ) {
        event.preventDefault();

        undo();
      }
    };

    window.addEventListener(
      'keydown',
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      );
    };
  }, [undo]);

  const getInitNodeData = (nodeID, type) => {
    return {
      id: nodeID,
      nodeType: type,
    };
  };

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds =
        reactFlowWrapper.current.getBoundingClientRect();

      const data =
        event.dataTransfer.getData(
          'application/reactflow'
        );

      if (!data) return;

      const appData = JSON.parse(data);

      const type = appData?.nodeType;

      if (!type) return;

      const position = reactFlowInstance.project({
        x:
          event.clientX -
          reactFlowBounds.left,

        y:
          event.clientY -
          reactFlowBounds.top,
      });

      const nodeID = getNodeID(type);

      const newNode = {
        id: nodeID,
        type,
        position,
        data: getInitNodeData(
          nodeID,
          type
        ),
      };

      addNode(newNode);
    },
    [
      reactFlowInstance,
      addNode,
      getNodeID,
    ]
  );

  const onDragOver = useCallback(
    (event) => {
      event.preventDefault();

      event.dataTransfer.dropEffect =
        'move';
    },
    []
  );

  return (
    <div
      ref={reactFlowWrapper}
      style={{
        width: '100%',
        height: '65vh',

        borderTop:
          '1px solid #1e293b',

        background:
          'radial-gradient(circle at top, #0f172a, #020617)',

        overflow: 'hidden',

        position: 'relative',
      }}
    >
      <ReactFlow
        fitView
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setReactFlowInstance}
        nodeTypes={nodeTypes}
        proOptions={proOptions}
        snapGrid={[
          gridSize,
          gridSize,
        ]}
        connectionLineStyle={{
          stroke: '#3be3f6',
          strokeWidth: 3,
        }}
        connectionLineType="smoothstep"
        defaultEdgeOptions={{
          animated: true,

          style: {
            stroke: '#64748b',
            strokeWidth: 2,
          },
        }}
      >
        <Background
          color="#1e293b"
          gap={24}
          size={1.4}
        />

        <Controls
          style={{
            background: '#0f172a',

            border:
              '1px solid #334155',

            borderRadius: '12px',

            boxShadow:
              '0 4px 16px rgba(0,0,0,0.35)',
          }}
        />

        <MiniMap
          pannable
          zoomable
          style={{
            backgroundColor:
              '#0f172a',

            border:
              '1px solid #334155',

            borderRadius: '12px',

            height: 100,
            width: 160,

            boxShadow:
              '0 4px 16px rgba(0,0,0,0.35)',
          }}
          nodeColor="#3bf6ce"
        />
      </ReactFlow>
    </div>
  );
};  