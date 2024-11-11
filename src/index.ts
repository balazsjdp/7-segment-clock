import { ClockController } from './classes/ClockController';
import './style/styles.scss';

const format = 'HH:mm.ss';

const clockController = new ClockController(format);

clockController.initialize();
