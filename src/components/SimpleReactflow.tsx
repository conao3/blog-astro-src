import ReactFlow from 'reactflow';

import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 10, y: 10 }, data: { label: '1' } },
  { id: '2', position: { x: 10, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export default function App() {
  return (
    <div style={{ border: '1px solid', width: '100%', height: '500px' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}
