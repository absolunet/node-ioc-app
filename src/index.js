//--------------------------------------------------------
//-- Node IoC
//--------------------------------------------------------

// Importing Node IoC application class.
import { Application } from '@absolunet/ioc';


// Importing application bootstrapper.
import bootstrap from './bootstrap';


// Create a fresh application instance.
const app = Application.make();


// Bootstrap the application.
bootstrap(app);


// Exposing the application.
export default app;
