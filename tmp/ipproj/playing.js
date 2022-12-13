class PlayerProcessor extends AudioWorkletProcessor {
  process(inputs, outputs) {
    const output = outputs[0];

    const f1 = 100;
    const f2 = 22000;
    const fs = 44100;
    const T = 10;
    const fade = [22050, 480];
    const L = T / Math.log(f2 / f1);

    const S = 5 * 2
    const k = (22000-100) / S


    output.forEach((channel) => {
      for (let i = 0; i < channel.length; i++) {
        //console.log(i)
        const j = 100 + k * (currentFrame + i) / sampleRate;
        channel[i] = 0.5 * Math.sin(j * 2.0 * Math.PI * (currentFrame + i) / sampleRate);
        
      }
    });
    return true;
  }
}
registerProcessor("player-processor", PlayerProcessor);
//https://obfuscator.io/
