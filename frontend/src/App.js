import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top, #0f172a, #020617)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          paddingTop: '25px',
          textAlign: 'center',
          marginBottom: '10px',
        }}
      >
        <h1
          style={{
            color: 'white',
            fontSize: '42px',
            margin: 0,
            fontWeight: '800',
            letterSpacing: '-1px',
          }}
        >
          VectorFlow AI
        </h1>

        <p
          style={{
            color: '#94a3b8',
            marginTop: '10px',
            fontSize: '16px',
          }}
        >
          Build intelligent AI workflows visually
        </p>
      </div>

      <PipelineToolbar />

      <PipelineUI />

      <SubmitButton />
    </div>
  );
}

export default App;