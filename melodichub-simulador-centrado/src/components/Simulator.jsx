import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { story } from '../data/story';

export default function MelodicHubSimulator() {
  const [current, setCurrent] = useState('start');
  const node = story[current];

  return (
    <div className="grid place-items-center h-screen w-screen bg-gradient-to-br from-indigo-300 to-purple-400 px-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.3 }}
          className="bg-white text-black p-8 rounded-2xl shadow-xl max-w-xl w-full text-center"
        >
          <h2 className="text-xl font-semibold mb-6">{node.text}</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {node.choices.map((choice, index) => (
              <button
                key={index}
                onClick={() => setCurrent(choice.next)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-xl font-medium"
              >
                {choice.text}
              </button>
            ))}
          </div>
          {node.choices.length === 0 && (
            <button
              onClick={() => setCurrent('start')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-xl font-medium mt-6"
            >
              Reiniciar historia
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
