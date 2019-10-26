//--------------------------------------------------------
//-- Node IoC - Console - Kernel
//--------------------------------------------------------

import { ConsoleKernel } from '@absolunet/ioc';


/**
 * Application kernel that handle incoming CLI request.
 */
class Kernel extends ConsoleKernel {

	/**
	 * @inheritdoc
	 */
	beforeHandling() {
		// Here, you can perform actions before handling request.
		this.registerCommands();
	}

	/**
	 * @inheritdoc
	 */
	afterHandling() {
		// Here, you can perform actions after request was handled, if no error was thrown.
	}

	/**
	 * @inheritdoc
	 */
	terminating() {
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
