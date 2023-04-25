import chalk from 'chalk';
import randomColor from 'randomcolor';

const unforeseenColor = randomColor();
const userHue = process.argv[2];
const userLuminosity = process.argv[3];


// If user does not input both hue and luminosity we log a random unforeseen color

if (!userHue && !userLuminosity) {
  console.log(
    chalk.hex(unforeseenColor)(`  ###############################
  ###############################
  ###############################
  #####                     #####
  #####       ${unforeseenColor}       #####
  #####                     #####
  ###############################
  ###############################
  ###############################`),
  );

// In any other case (user did input one or the other) we log the specific user color

} else {
  const userColor = randomColor({
    hue: userHue,
    luminosity: userLuminosity,
  });
  console.log(
    chalk.hex(userColor)(`  ###############################
  ###############################
  ###############################
  #####                     #####
  #####       ${userColor}       #####
  #####                     #####
  ###############################
  ###############################
  ###############################`),
  );
}