import { DraggableNode } from './draggableNode';

import {
  FiCpu,
  FiType,
  FiImage,
  FiGlobe,
  FiClock,
  FiFilter,
  FiLogIn,
  FiLogOut,
} from 'react-icons/fi';

import { BsCalculator } from 'react-icons/bs';

export const PipelineToolbar = () => {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '14px',
          flexWrap: 'wrap',
          padding: '18px',
          borderRadius: '20px',
          background:
            'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid #334155',
          boxShadow:
            '0 10px 40px rgba(0,0,0,0.35)',

          width: '95%',
          maxWidth: '1400px',

          justifyContent: 'center',

          overflowX: 'auto',
        }}
      >
        <DraggableNode
          type='customInput'
          label={
            <>
              <FiLogIn />
              <span>Input</span>
            </>
          }
        />

        <DraggableNode
          type='llm'
          label={
            <>
              <FiCpu />
              <span>LLM</span>
            </>
          }
        />

        <DraggableNode
          type='customOutput'
          label={
            <>
              <FiLogOut />
              <span>Output</span>
            </>
          }
        />

        <DraggableNode
          type='text'
          label={
            <>
              <FiType />
              <span>Text</span>
            </>
          }
        />

        <DraggableNode
          type='api'
          label={
            <>
              <FiGlobe />
              <span>API</span>
            </>
          }
        />

        <DraggableNode
          type='math'
          label={
            <>
              <BsCalculator />
              <span>Math</span>
            </>
          }
        />

        <DraggableNode
          type='filter'
          label={
            <>
              <FiFilter />
              <span>Filter</span>
            </>
          }
        />

        <DraggableNode
          type='delay'
          label={
            <>
              <FiClock />
              <span>Delay</span>
            </>
          }
        />

        <DraggableNode
          type='image'
          label={
            <>
              <FiImage />
              <span>Image</span>
            </>
          }
        />
      </div>
    </div>
  );
};