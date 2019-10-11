/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(focus,knowsProgramming,config) {	
	const base = 500;
	const master = 800;
	let level = knowsProgramming ? master : master+base;	
	let	result = Math.ceil(level/(config[focus]));
	return result;
};
  