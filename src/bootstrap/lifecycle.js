//--------------------------------------------------------
//-- Node IoC - Bootstrap - Lifecycle
//--------------------------------------------------------

export default async (app, shouldHandleRequest = true) => {

	// Define exception handler callback for base process unhandled error events.
	const handleException = async (exception) => {
		await app.make('exception.handler').handle(exception);
	};

	// Bind exception handler callback on unhandled error events.
	process
		.on('unhandledRejection', handleException)
		.on('uncaughtException',  handleException);

	// Make the kernel instance
	const kernel = app.make('kernel');

	// Boot the application.
	app.bootIfNotBooted();

	// If the application should handle request, handle it with the kernel instance.
	if (shouldHandleRequest) {
		try {
			// Handle the incoming request.
			await kernel.handle();
		} catch (error) {
			// If an error occurred, handle it through the defined exception handler.
			await handleException(error);
		} finally {
			// When the request, or an error, has been handled, terminate the request.
			await kernel.terminate();
		}
	}

};