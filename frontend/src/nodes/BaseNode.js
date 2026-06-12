import { Handle, Position } from 'reactflow';

export const BaseNode = ({
  title,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          'translateY(-3px)';

        e.currentTarget.style.boxShadow =
          '0 20px 50px rgba(0,0,0,0.45), 0 0 30px rgba(59,130,246,0.18)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          'translateY(0px)';

        e.currentTarget.style.boxShadow =
          '0 10px 40px rgba(0,0,0,0.35), 0 0 20px rgba(59,130,246,0.08)';
      }}
      style={{
        width: 260,
        minHeight: 160,
        border:
          '1px solid rgba(59,130,246,0.25)',
        borderRadius: '18px',
        padding: '16px',
        background:
          'linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.9))',
        color: '#ffffff',
        boxShadow:
          '0 10px 40px rgba(0,0,0,0.35), 0 0 20px rgba(59,130,246,0.08)',
        position: 'relative',
        backdropFilter: 'blur(12px)',
        transition: '0.2s ease',
        cursor: 'pointer',
      }}
    >
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{
            top: `${
              ((index + 1) * 100) /
              (inputs.length + 1)
            }%`,
            background: '#3b82f6',
            width: '12px',
            height: '12px',
            border: '2px solid white',
          }}
        />
      ))}

      <div
        style={{
          fontSize: '17px',
          fontWeight: '700',
          marginBottom: '14px',
          borderBottom:
            '1px solid #334155',
          paddingBottom: '10px',
          letterSpacing: '0.5px',
        }}
      >
        {title}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          fontSize: '13px',
        }}
      >
        {children}
      </div>

      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{
            top: `${
              ((index + 1) * 100) /
              (outputs.length + 1)
            }%`,
            background: '#22c55e',
            width: '12px',
            height: '12px',
            border: '2px solid white',
          }}
        />
      ))}
    </div>
  );
};