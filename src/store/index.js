import { proxy } from "valtio";
import threejsImage from './threejs.png';
const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: threejsImage,
  fullDecal: threejsImage,
});

export default state;
