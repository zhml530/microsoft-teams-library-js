export declare namespace appInitialization {
    /**
   * To notify app loaded to hide loading indicator
   */
    function notifyAppLoaded(): void;
    /**
     * To notify app Initialization successs and ready for user interaction
     */
    function notifySuccess(): void;
    /**
     * To notify app Initialization failed
     */
    function notifyFailure(appInitializationFailedRequest: appInitialization.IFailedRequest): void;
    const enum FailedReason {
        AuthFailed = "AuthFailed",
        Timeout = "Timeout",
        Other = "Other"
    }
    interface IFailedRequest {
        reason: appInitialization.FailedReason;
        message?: string;
    }
}
