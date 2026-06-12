// store.js

import { create } from 'zustand';

import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  MarkerType,
} from 'reactflow';

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],

  history: [],

  nodeIDs: {},

  saveState: () => {
    const currentState = {
      nodes: get().nodes,
      edges: get().edges,
    };

    set({
      history: [
        ...get().history,
        currentState,
      ],
    });
  },

  undo: () => {
    const history = get().history;

    if (history.length === 0) return;

    const previousState =
      history[history.length - 1];

    set({
      nodes: previousState.nodes,
      edges: previousState.edges,

      history: history.slice(
        0,
        history.length - 1
      ),
    });
  },

  getNodeID: (type) => {
    const newIDs = {
      ...get().nodeIDs,
    };

    if (newIDs[type] === undefined) {
      newIDs[type] = 0;
    }

    newIDs[type] += 1;

    set({
      nodeIDs: newIDs,
    });

    return `${type}-${newIDs[type]}`;
  },

  addNode: (node) => {
    get().saveState();

    set({
      nodes: [...get().nodes, node],
    });
  },

  onNodesChange: (changes) => {
    get().saveState();

    set({
      nodes: applyNodeChanges(
        changes,
        get().nodes
      ),
    });
  },

  onEdgesChange: (changes) => {
    get().saveState();

    set({
      edges: applyEdgeChanges(
        changes,
        get().edges
      ),
    });
  },

  onConnect: (connection) => {
    get().saveState();

    set({
      edges: addEdge(
        {
          ...connection,
          type: 'smoothstep',
          animated: true,

          markerEnd: {
            type: MarkerType.Arrow,
            height: '20px',
            width: '20px',
          },
        },
        get().edges
      ),
    });
  },

  updateNodeField: (
    nodeId,
    fieldName,
    fieldValue
  ) => {
    set({
      nodes: get().nodes.map((node) => {
        if (node.id === nodeId) {
          node.data = {
            ...node.data,
            [fieldName]: fieldValue,
          };
        }

        return node;
      }),
    });
  },
}));