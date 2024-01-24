import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { observe } from './component/Game';
import Board from './component/Board';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(document.getElementById('root'));

observe((knightPosition) => {
  root.render(
    <React.StrictMode>
      <DndProvider backend={HTML5Backend}>
        <Board knightPosition={knightPosition} />
      </DndProvider>
    </React.StrictMode>
  );
});
