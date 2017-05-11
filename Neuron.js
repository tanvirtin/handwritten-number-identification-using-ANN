'use strict';

/*
	NOTE** - ouput neurons will contain no weight values and will be an empty list
*/

class Neuron {

	// takes in a number of neurons next layer has
	constructor(numNeuronsNL) {
		this.weights = []; // array of weights
		this.output = 0; // this is the activated output value that a neuron holds		
		this.feedForwarded = []; // weight * xj values given from nodes in previous layer, these values get added and then squashed using activation function
		this.error = 0; // each neuron should have it's own error that it should rectify
		this.assignWeights(numNeuronsNL);
	}

	assignWeights(size) {
		for (var i = 0; i < size; ++i) {
			this.weights.push(this.randomW());
		}
	}

	displayWeights() {
		console.log(this.weights);
	}

	// generates a random weight between -1 and 1
	randomW() {
		var r = Math.random();

		if (r > 0.5) {
			return -Math.random();
		} else {
			return Math.random();
		}
	}


}


module.exports = Neuron;