import { useStore } from './store';

export const SubmitButton = () => {
  const { nodes, edges } = useStore();

  const handleSubmit = async () => {
    try {
      const response = await fetch(
        'http://127.0.0.1:8000/pipelines/parse',
        {
          method: 'POST',
          headers: {
            'Content-Type':
              'application/json',
          },
          body: JSON.stringify({
            nodes,
            edges,
          }),
        }
      );

      const data = await response.json();

      alert(
        `Pipeline Analysis\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${data.is_dag}`
      );
    } catch (error) {
      console.error(error);

      alert(
        'Failed to submit pipeline'
      );
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '30px',
      }}
    >
      <button
        onClick={handleSubmit}
        onMouseEnter={(e) => {
          e.target.style.transform =
            'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform =
            'scale(1)';
        }}
        style={{
          padding: '14px 32px',
          borderRadius: '14px',
          border: 'none',
          background:
            'linear-gradient(135deg, #2563eb, #06b6d4)',
          color: 'white',
          fontWeight: '700',
          cursor: 'pointer',
          fontSize: '16px',
          boxShadow:
            '0 10px 30px rgba(37,99,235,0.35)',
          transition: '0.2s ease',
          letterSpacing: '0.5px',
        }}
      >
        🚀 Deploy Pipeline
      </button>
    </div>
  );
};