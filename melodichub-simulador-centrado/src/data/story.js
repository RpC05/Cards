export const story = {
  start: {
    text: "Tienes una idea: una plataforma de partituras digitales interactivas. ¿Qué haces primero?",
    choices: [
      { text: "Investigar el mercado", next: "investiga" },
      { text: "Desarrollo directo", next: "desarrollo" }
    ]
  },

  investiga: {
    text: "Descubres que existen muchas plataformas (MuseScore, Flat.io...), pero ninguna con blockchain ni integración real con DAWs. ¿Qué haces?",
    choices: [
      { text: "Diseñar entrevistas estructuradas", next: "entrevistas" },
      { text: "Descartar la idea", next: "descartado" }
    ]
  },

  desarrollo: {
    text: "Creas una app funcional, pero no sabes a quién le sirve exactamente. ¿Qué haces?",
    choices: [
      { text: "Lanzamiento riesgoso", next: "lanzamiento" },
      { text: "MVP terminado sin feedback", next: "mvp_sin_feedback" }
    ]
  },

  entrevistas: {
    text: "Validas que muchos músicos tienen problemas con partituras estáticas, prácticas poco interactivas y protección de sus obras. ¿Qué haces ahora?",
    choices: [
      { text: "Construir MVP centrado en esos problemas", next: "mvp_validado" },
      { text: "Ampliar investigación para otros segmentos", next: "ampliar_segmentos" }
    ]
  },

  mvp_validado: {
    text: "Tu MVP permite cargar audio, generar partituras, colaborar y proteger obras. Gusta mucho a músicos jóvenes y docentes. ¿Qué decides?",
    choices: [
      { text: "Lanzarlo ya", next: "lanzado_a_tiempo" },
      { text: "Mejorarlo aún más antes de lanzar", next: "pulido" }
    ]
  },

  ampliar_segmentos: {
    text: "Detectas que productores de podcast y beatmakers también podrían usar tu herramienta. ¿Qué haces?",
    choices: [
      { text: "Expandes tu propuesta", next: "pivot" },
      { text: "Te mantienes solo con músicos académicos", next: "nicho" }
    ]
  },

  lanzamiento: {
    text: "Publicas la versión beta sin tener muy claro tu público. Algunos usuarios entran, pero no conectan. ¿Qué haces ahora?",
    choices: [
      { text: "Ajuste sobre la marcha", next: "ajuste" },
      { text: "Ignorar señales y seguir igual", next: "estancado" }
    ]
  },

  ajuste: {
    text: "Corriges algunas funciones mientras los usuarios comentan. Tienes algo de tracción, pero no es claro el rumbo.",
    choices: [
      { text: "Pivotar con base en feedback", next: "pivot_exitoso" },
      { text: "Seguir con lo que tienes sin grandes cambios", next: "estancado_lento" }
    ]
  },

  // Finales
  descartado: {
    text: "Descartas la idea. Consideraste que ya hay suficientes soluciones parecidas.",
    choices: []
  },

  mvp_sin_feedback: {
    text: "Lanzas sin validar. Tu solución es funcional, pero poco deseada. No hay mucha tracción. Fallaste en resolver una necesidad real.",
    choices: []
  },

  lanzado_a_tiempo: {
    text: "Lanzaste justo a tiempo. Los early adopters comparten la herramienta. Tu comunidad crece orgánicamente. ¡Éxito!",
    choices: []
  },

  pulido: {
    text: "Ofreces una solución excelente, pero la competencia avanzó. Aun así, los usuarios valoran la calidad. Buen trabajo.",
    choices: []
  },

  pivot: {
    text: "La plataforma ahora sirve a músicos, podcasters y productores. Creces en varios nichos. ¡MelodicHub se convierte en un verdadero hub musical!",
    choices: []
  },

  nicho: {
    text: "Tu enfoque limitado a educación musical te vuelve referencia en conservatorios. Crecimiento firme y sostenido, aunque menos masivo.",
    choices: []
  },

  pivot_exitoso: {
    text: "Redefiniste públicos, mejoraste funcionalidades, simplificaste la experiencia. MelodicHub gana impulso. El giro estratégico funcionó. ¡Bien!",
    choices: []
  },

  estancado_lento: {
    text: "El producto sigue siendo usado por algunos, pero no genera crecimiento. La startup se mantiene viva, pero sin tracción suficiente. Se estanca lentamente.",
    choices: []
  },

  estancado: {
    text: "Nadie entendió bien el producto. Nunca lograste encajar con un usuario real. Lección aprendida: construir sin validar es arriesgado.",
    choices: []
  }
};
