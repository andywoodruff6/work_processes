import convertToMermaid from 'json-canvas-to-mermaid';

const jsonCanvasData = {
    nodes: [
        { id: 'node1', type: 'text', text: 'Start', x: 0, y: 0, width: 100, height: 50 },
        { id: 'node2', type: 'text', text: 'Process', x: 200, y: 0, width: 100, height: 50 },
        { id: 'node3', type: 'text', text: 'End', x: 400, y: 0, width: 100, height: 50 }
    ],
    edges: [
        { id: 'edge1', fromNode: 'node1', toNode: 'node2' },
        { id: 'edge2', fromNode: 'node2', toNode: 'node3' }
    ]
};

const mermaidSyntax = convertToMermaid(jsonCanvasData);
console.log(mermaidSyntax);