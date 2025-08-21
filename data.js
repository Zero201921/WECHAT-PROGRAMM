const cableData = [
  // ≤10kV 无卤 -40℃
  {"model":"ZC-YJY63-8.7/15 1×120","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":120,"diameter":30,"current":370,"conductorI":17.4,"shieldI":1286,"capacitance":0.2603,"inductance":0.5473,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},
  {"model":"ZC-YJY63-8.7/15 1×185","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":185,"diameter":33,"current":460,"conductorI":26.7,"shieldI":1264,"capacitance":0.3123,"inductance":0.5252,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},
  {"model":"ZC-YJY63-8.7/15 1×240","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":240,"diameter":36,"current":565,"conductorI":34.6,"shieldI":1262,"capacitance":0.3439,"inductance":0.5143,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},
  {"model":"ZC-YJY63-8.7/15 1×300","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":300,"diameter":38,"current":650,"conductorI":43.1,"shieldI":1261,"capacitance":0.3755,"inductance":0.5032,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},
  {"model":"ZC-YJY63-8.7/15 1×400","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":400,"diameter":41,"current":755,"conductorI":57.4,"shieldI":1256,"capacitance":0.4213,"inductance":0.4927,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},

  // ≤10kV 有卤 -15℃
  {"model":"ZC-YJV62-8.7/15 1×120","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":120,"diameter":30,"current":370,"conductorI":17.4,"shieldI":1286,"capacitance":0.2603,"inductance":0.5473,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},
  {"model":"ZC-YJV62-8.7/15 1×185","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":185,"diameter":33,"current":460,"conductorI":26.7,"shieldI":1264,"capacitance":0.3123,"inductance":0.5252,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},
  {"model":"ZC-YJV62-8.7/15 1×240","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":240,"diameter":36,"current":565,"conductorI":34.6,"shieldI":1262,"capacitance":0.3439,"inductance":0.5143,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},
  {"model":"ZC-YJV62-8.7/15 1×300","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":300,"diameter":38,"current":650,"conductorI":43.1,"shieldI":1261,"capacitance":0.3755,"inductance":0.5032,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},
  {"model":"ZC-YJV62-8.7/15 1×400","ratedVoltage":"8.7kV","phaseVoltage":"15kV","cores":"单芯","area":400,"diameter":41,"current":755,"conductorI":57.4,"shieldI":1256,"capacitance":0.4213,"inductance":0.4927,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"≤10kV"},

  // 20~35kV 无卤 -40℃
  {"model":"ZC-YJY63-26/35 1×120","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":120,"diameter":43,"current":380,"conductorI":17.4,"shieldI":1282,"capacitance":0.146,"inductance":0.6118,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},
  {"model":"ZC-YJY63-26/35 1×185","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":185,"diameter":47,"current":490,"conductorI":26.7,"shieldI":1279,"capacitance":0.1665,"inductance":0.5839,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},
  {"model":"ZC-YJY63-26/35 1×240","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":240,"diameter":49,"current":575,"conductorI":34.6,"shieldI":1278,"capacitance":0.1805,"inductance":0.5677,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},
  {"model":"ZC-YJY63-26/35 1×300","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":300,"diameter":51,"current":660,"conductorI":43.1,"shieldI":1277,"capacitance":0.1945,"inductance":0.554,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},
  {"model":"ZC-YJY63-26/35 1×400","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":400,"diameter":54,"current":765,"conductorI":57.4,"shieldI":1274,"capacitance":0.2146,"inductance":0.5395,"lowTemp":-40,"halogen":"无卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},

  // 20~35kV 有卤 -15℃
  {"model":"ZC-YJV62-26/35 1×120","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":120,"diameter":43,"current":380,"conductorI":17.4,"shieldI":1282,"capacitance":0.146,"inductance":0.6118,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},
  {"model":"ZC-YJV62-26/35 1×185","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":185,"diameter":47,"current":490,"conductorI":26.7,"shieldI":1279,"capacitance":0.1665,"inductance":0.5839,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},
  {"model":"ZC-YJV62-26/35 1×240","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":240,"diameter":49,"current":575,"conductorI":34.6,"shieldI":1278,"capacitance":0.1805,"inductance":0.5677,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},
  {"model":"ZC-YJV62-26/35 1×300","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":300,"diameter":51,"current":660,"conductorI":43.1,"shieldI":1277,"capacitance":0.1945,"inductance":0.554,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"},
  {"model":"ZC-YJV62-26/35 1×400","ratedVoltage":"26kV","phaseVoltage":"35kV","cores":"单芯","area":400,"diameter":54,"current":765,"conductorI":57.4,"shieldI":1274,"capacitance":0.2146,"inductance":0.5395,"lowTemp":-15,"halogen":"有卤","flame":"ZC","armor":"带铠","systemVoltage":"20~35kV"}
];


module.exports = cableData;
