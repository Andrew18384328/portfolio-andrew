export const projectsData = {
  "electrochemical-nutrient-recovery": {
    title: "Electrochemical Nutrient Recovery from Wastewater",
    summary:
      "Engineered an annular electrochemical reactor with a rotating magnesium electrode to recover nitrogen and phosphorus from anaerobic digester sidestreams as struvite, a slow-release fertilizer.",
    description: `This comprehensive capstone project focused on developing a sustainable solution for nutrient recovery from wastewater streams. The project involved designing and optimizing an innovative electrochemical reactor system that transforms waste into valuable fertilizer products.

The reactor design featured a unique annular configuration with a rotating magnesium electrode, enabling efficient electrochemical precipitation of struvite (MgNH₄PO₄·6H₂O) from anaerobic digester sidestreams. This approach addresses two critical environmental challenges: wastewater treatment and sustainable fertilizer production.

Key technical achievements included comprehensive process modeling using a custom Excel model to optimize reactor conditions, detailed safety analysis through Failure Mode and Effects Analysis (FMEA), and thorough economic evaluation demonstrating commercial viability. The integrated approach considered energy consumption, yield optimization, and downstream processing requirements.

The economic analysis projected significant revenue potential of $1.5 million per year, making this technology commercially attractive for wastewater treatment facilities. The project demonstrated how chemical engineering principles can be applied to create circular economy solutions that benefit both the environment and industry.`,
    skills: ["Electrochemistry", "Excel", "Process Design", "FMEA", "Economic Analysis"],
    images: [
      {
        src: "/reactor_fancy.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
      {
        src: "/echem plot.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
    ],
    year: "2025",
    duration: "4 months",
    type: "Capstone Project",
  },
  "pid-tuning-heat-exchanger": {
    title: "PID Tuning for Heat Exchanger Systems",
    summary:
      "Developed MATLAB Simulink models for helicoil and shell-and-tube heat exchangers, implementing PID control loops to optimize tuning parameters.",
    description: `This project focused on advanced process control optimization for industrial heat exchanger systems. The work involved developing comprehensive MATLAB Simulink models to simulate and optimize the performance of two critical heat exchanger configurations commonly used in chemical processing.

The project began with detailed mathematical modeling of transfer functions in both helicoil and shell-and-tube heat exchangers. These models incorporated realistic process parameters including fluid properties, flow rates, and heat transfer coefficients to ensure accurate representation of industrial conditions.

PID control loops were implemented and systematically tuned using various optimization techniques. The primary objectives were to minimize temperature oscillations, reduce overshoot during setpoint changes, and improve overall process stability. Multiple tuning methods were evaluated, including Ziegler-Nichols, Cohen-Coon, and modern optimization algorithms.`,
    skills: ["MATLAB Simulink", "Process Control", "PID Tuning", "Heat Transfer", "Safety Analysis"],
    images: [
      {
        src: "/bfd snt.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
      {
        src: "/response plot.png",
        imageStyle: "contain" as const,
        imageBg: "black" as const,
      },
    ],
    year: "2025",
    duration: "3 months",
    type: "Course Project",
  },
  "monte-carlo-atomic-ordering": {
    title: "Monte Carlo Simulation of Atomic Ordering",
    summary:
      "Designed and implemented a Monte Carlo simulation in Python to model the disorder-to-order transformation in MnAl alloys with Cu additives for rare-earth-free magnet applications.",
    description: `This advanced materials modeling project investigated the atomic-scale behavior of MnAl alloys with copper additives, targeting the development of rare-earth-free permanent magnets. The work combined computational chemistry, statistical mechanics, and materials science to understand ordering phenomena critical for magnetic properties.

The project utilized sophisticated Monte Carlo simulation techniques implemented in Python to model the disorder-to-order transformation in MnAl-Cu alloy systems. This transformation is crucial for developing the L1₀ phase structure that provides the magnetic anisotropy necessary for permanent magnet applications.

Bond interaction energies were calculated using PSI4, a quantum chemistry software package. These ab initio calculations provided the fundamental energetic parameters needed for the Monte Carlo simulations. The calculated energies were then fitted to Lennard-Jones potential models to enable efficient large-scale simulations.

The simulation results revealed how copper additives influence the ordering kinetics and thermodynamic stability of the desired L1₀ phase. Key findings included optimal copper concentrations for enhanced ordering, temperature-dependent phase stability, and the role of atomic diffusion in the transformation process. This work contributes to the development of sustainable permanent magnet materials that could reduce dependence on rare earth elements.`,
    skills: ["Python", "Computational Modeling", "PSI4", "Statistics", "Quantum Chemistry"],
    images: [
      {
        src: "/Figure 2_paper.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
      {
        src: "/Figure 3_final.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
    ],
    year: "2023",
    duration: "3 months",
    type: "Course Project",
  },
  "acrolein-production": {
    title: "Acrolein Production from Propylene Oxidation",
    summary:
      "Designed a 50,000 MT/year industrial plant producing 99 wt% acrolein from polymer-grade propylene using catalytic packed-bed reactors and vacuum distillation.",
    description: `This comprehensive plant design project involved the complete conceptual design of a large-scale industrial facility for acrolein production. Acrolein is a critical chemical intermediate used in the production of acrylic acid, methionine, and various other industrial chemicals.

The process design centered on the catalytic oxidation of propylene in packed-bed reactors. The design of the reactor was optimized for selectivity to acrolein while ensuring sufficient acrolein yield.

Extensive process simulation was performed using Aspen Plus to optimize reactor conditions, separation sequences, and energy integration. The simulation included detailed kinetic modeling based on Langmuir-Hinshelwood-Hougen-Watson mechanisms and comprehensive thermodynamic analysis using appropriate property methods for the chemical system.

The separation system featured a sophisticated vacuum distillation train designed to achieve 99 wt% acrolein purity while minimizing energy consumption, designed and optimized in Aspen Plus.

Economic analysis demonstrated strong project viability with a Net Present Value of $409.9 million over a 20-year project life. The analysis included detailed capital cost estimation, operating cost analysis, and sensitivity studies on key economic parameters.`,
    skills: ["Aspen Plus", "Process Simulation", "Economic Analysis", "Thermodynamics", "Kinetics", "Plant Design"],
    images: [
      {
        src: "/reactor optimization.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
      {
        src: "/separation step.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
    ],
    year: "2024",
    duration: "4 months",
    type: "Design Project",
  },
  "reaction-kinetics-mechanism": {
    title: "Reaction Kinetics Mechanism Identification",
    summary:
      "Analyzed simulated kinetic data to determine rate laws, activation energies, and mechanisms for an unknown catalyzed reaction using integral and differential methods.",
    description: `This analytical project focused on the systematic determination of reaction mechanisms and kinetic parameters from experimental data. The work demonstrated advanced skills in kinetic analysis, data interpretation, and mechanism elucidation for complex catalyzed reaction systems.

The project began with comprehensive analysis of simulated kinetic data representing an unknown catalyzed reaction system. Multiple analytical approaches were employed, including both integral and differential methods for rate law determination. This dual approach provided robust validation of the proposed kinetic models.

Excel-based curve fitting algorithms were developed and implemented to extract kinetic parameters from the experimental data. The analysis included determination of reaction orders, rate constants, and activation energies for both forward and reverse reactions. Statistical analysis was performed to assess the reliability and confidence intervals of the determined parameters.

Mechanism discrimination was performed by comparing different proposed reaction pathways and their predicted kinetic behavior with the simulated experimental observations.

The final validated kinetic model was evaluated against experimental data in Python. The model successfully predicted reaction behavior under various conditions and provided insights into the controlling steps and optimal operating conditions. This work demonstrated the power of combining rigorous mathematical analysis with computational tools for understanding complex reaction systems.`,
    skills: ["Kinetics", "Python", "Data Analysis", "Mechanism Determination", "Statistical Analysis"],
    images: [
      {
        src: "/kinetic plot.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
      {
        src: "/overall rxn order.png",
        imageStyle: "contain" as const,
        imageBg: "white" as const,
      },
    ],
    year: "2024",
    duration: "3 months",
    type: "Course Project",
  },
}

export type ProjectData = typeof projectsData
export type ProjectSlug = keyof ProjectData
