//--------------------------------------------------------
//-- Node IoC
//--------------------------------------------------------

// Import Node IoC application class.
import { Application } from '@absolunet/ioc';


// Import application bootstrapper.
import bootstrap from './bootstrap';


// Create a fresh application instance.
const app = Application.make();


// Bootstrap the application.
bootstrap(app);


// Expose the application.
export default app;
