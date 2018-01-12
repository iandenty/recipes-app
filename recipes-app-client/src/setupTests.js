import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.window = {}
import localStorage from 'mock-local-storage'
window.localStorage = global.localStorage

configure({ adapter: new Adapter() });
