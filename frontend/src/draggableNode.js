export const DraggableNode = ({
  type,
  label,
}) => {
  const onDragStart = (
    event,
    nodeType
  ) => {
    const appData = {
      nodeType,
    };

    event.target.style.cursor =
      'grabbing';

    event.dataTransfer.setData(
      'application/reactflow',
      JSON.stringify(appData)
    );

    event.dataTransfer.effectAllowed =
      'move';
  };

  return (
    <div
      className={type}
      draggable
      onDragStart={(event) =>
        onDragStart(event, type)
      }
      onDragEnd={(event) => {
        event.target.style.cursor =
          'grab';
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform =
          'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          'scale(1)';
      }}
      style={{
        cursor: 'grab',

        minWidth: '88px',
        height: '52px',

        padding: '0 14px',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',

        borderRadius: '14px',

        background:
          'linear-gradient(135deg, #1e293b, #334155)',

        color: 'white',

        border: '1px solid #475569',

        boxShadow:
          '0 4px 12px rgba(0,0,0,0.25)',

        fontWeight: '600',
        fontSize: '14px',

        transition: '0.2s ease',

        flexShrink: 0,
      }}
    >
      {label}
    </div>
  );
};