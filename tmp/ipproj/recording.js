class RecorderProcessor extends AudioWorkletProcessor {
    process(inputs){
      const inputData = inputs[0][0];
      if(inputData instanceof Float32Array)
        this.port.postMessage(inputData.subarray());
      return true;
    }
  }
  
registerProcessor('recorder-processor', RecorderProcessor);
//https://obfuscator.io/