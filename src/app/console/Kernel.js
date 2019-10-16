//--------------------------------------------------------
//-- Node IoC - Console - Kernel
//--------------------------------------------------------

import { ConsoleKernel } from '@absolunet/ioc';


class Kernel extends ConsoleKernel {

	/**
	 * @inheritdoc
	 */
	onBeforeHandling() {
		// Here, you can perform actions before handling request.
		this.registerCommands();
	}

	/**
	 * @inheritdoc
	 */
	onAfterHandling() {
		// Here, you can perform actions after request was handled, if no error was thrown.
	}

	/**
	 * @inheritdoc
	 */
	onTerminating() {
		// Here, you can perform actions before the application terminates.
	}

	/**
	 * Register commands in the command registrar based on application command path.
	 */
	registerCommands() {
		this.commandRegistrar.addFromFolder(this.app.commandPath());
	}

}


export default Kernel;
