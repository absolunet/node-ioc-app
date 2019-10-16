//--------------------------------------------------------
//-- Node IoC - Bootstrap
//--------------------------------------------------------

import ConsoleKernel    from '../app/console/Kernel';
import ExceptionHandler from '../app/exceptions/Handler';


export default (app) => {

	let kernel;

	// Register main handlers in the container
	app.singleton('kernel',            ConsoleKernel);
	app.singleton('exception.handler', ExceptionHandler);


	// Add a delay before bootstrapping to allow external registering.
	new Promise(setTimeout)
		.then(async () => {
			// Make the kernel instance
			kernel = app.make(`kernel`);

			// Boot the application.
			app.bootIfNotBooted();

			// Handle the incoming request.
			await kernel.handle();
		})
		.catch(async (error) => {
			// If an error occurred, handle it through the defined exception handler.
			await app.make('exception.handler').handle(error);
		})
		.finally(async () => {
			// When the request, or an error, has been handled, terminate the request.
			await kernel.terminate();
		});


	return app;
};
