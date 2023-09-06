import CONST from '../CONST';

function canUseAllBetas(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.ALL);
}

function canUseChronos(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.CHRONOS_IN_CASH) || canUseAllBetas(betas);
}

function canUsePayWithExpensify(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.PAY_WITH_EXPENSIFY) || canUseAllBetas(betas);
}

function canUseDefaultRooms(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.DEFAULT_ROOMS) || canUseAllBetas(betas);
}

/**
 * IOU Send feature is temporarily disabled.
 */
function canUseIOUSend(): boolean {
    return false;
}

function canUseWallet(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.BETA_EXPENSIFY_WALLET) || canUseAllBetas(betas);
}

function canUseCommentLinking(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.BETA_COMMENT_LINKING) || canUseAllBetas(betas);
}

/**
 * We're requiring you to be added to the policy rooms beta on dev,
 * since contributors have been reporting a number of false issues related to the feature being under development.
 * See https://expensify.slack.com/archives/C01GTK53T8Q/p1641921996319400?thread_ts=1641598356.166900&cid=C01GTK53T8Q
 */
function canUsePolicyRooms(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.POLICY_ROOMS) || canUseAllBetas(betas);
}

function canUseTasks(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.TASKS) || canUseAllBetas(betas);
}

function canUseCustomStatus(betas: string[]): boolean {
    return betas.includes(CONST.BETAS.CUSTOM_STATUS) || canUseAllBetas(betas);
}

/**
 * Link previews are temporarily disabled.
 */
function canUseLinkPreviews(): boolean {
    return false;
}

export default {
    canUseChronos,
    canUsePayWithExpensify,
    canUseDefaultRooms,
    canUseIOUSend,
    canUseWallet,
    canUseCommentLinking,
    canUsePolicyRooms,
    canUseTasks,
    canUseCustomStatus,
    canUseLinkPreviews,
};
