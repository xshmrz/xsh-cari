const Account = {
    GetBtn      : jQuery('.AccountGetBtn'),
    GetAllBtn   : jQuery('.AccountGetAllBtn'),
    CreateBtn   : jQuery('.AccountCreateBtn'),
    UpdateBtn   : jQuery('.AccountUpdateBtn'),
    DeleteBtn   : jQuery('.AccountDeleteBtn'),
    GetFrm      : jQuery('.AccountGetFrm'),
    GetAllFrm   : jQuery('.AccountGetAllFrm'),
    CreateFrm   : jQuery('.AccountCreateFrm'),
    UpdateFrm   : jQuery('.AccountUpdateFrm'),
    DeleteFrm   : jQuery('.AccountDeleteFrm'),
    GetMdl      : jQuery('.AccountGetMdl'),
    GetAllMdl   : jQuery('.AccountGetAllMdl'),
    CreateMdl   : jQuery('.AccountCreateMdl'),
    UpdateMdl   : jQuery('.AccountUpdateMdl'),
    DeleteMdl   : jQuery('.AccountDeleteMdl'),
    GetMdlBtn   : jQuery('.AccountGetMdlBtn'),
    GetAllMdlBtn: jQuery('.AccountGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.AccountCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.AccountUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.AccountDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/account/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/account' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/account', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/account/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/account/' + id, null, callBackSuccess, callBackError);
    }
};

const AccountBalance = {
    GetBtn      : jQuery('.AccountBalanceGetBtn'),
    GetAllBtn   : jQuery('.AccountBalanceGetAllBtn'),
    CreateBtn   : jQuery('.AccountBalanceCreateBtn'),
    UpdateBtn   : jQuery('.AccountBalanceUpdateBtn'),
    DeleteBtn   : jQuery('.AccountBalanceDeleteBtn'),
    GetFrm      : jQuery('.AccountBalanceGetFrm'),
    GetAllFrm   : jQuery('.AccountBalanceGetAllFrm'),
    CreateFrm   : jQuery('.AccountBalanceCreateFrm'),
    UpdateFrm   : jQuery('.AccountBalanceUpdateFrm'),
    DeleteFrm   : jQuery('.AccountBalanceDeleteFrm'),
    GetMdl      : jQuery('.AccountBalanceGetMdl'),
    GetAllMdl   : jQuery('.AccountBalanceGetAllMdl'),
    CreateMdl   : jQuery('.AccountBalanceCreateMdl'),
    UpdateMdl   : jQuery('.AccountBalanceUpdateMdl'),
    DeleteMdl   : jQuery('.AccountBalanceDeleteMdl'),
    GetMdlBtn   : jQuery('.AccountBalanceGetMdlBtn'),
    GetAllMdlBtn: jQuery('.AccountBalanceGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.AccountBalanceCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.AccountBalanceUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.AccountBalanceDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/account-balance/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/account-balance' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/account-balance', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/account-balance/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/account-balance/' + id, null, callBackSuccess, callBackError);
    }
};

const AccountContact = {
    GetBtn      : jQuery('.AccountContactGetBtn'),
    GetAllBtn   : jQuery('.AccountContactGetAllBtn'),
    CreateBtn   : jQuery('.AccountContactCreateBtn'),
    UpdateBtn   : jQuery('.AccountContactUpdateBtn'),
    DeleteBtn   : jQuery('.AccountContactDeleteBtn'),
    GetFrm      : jQuery('.AccountContactGetFrm'),
    GetAllFrm   : jQuery('.AccountContactGetAllFrm'),
    CreateFrm   : jQuery('.AccountContactCreateFrm'),
    UpdateFrm   : jQuery('.AccountContactUpdateFrm'),
    DeleteFrm   : jQuery('.AccountContactDeleteFrm'),
    GetMdl      : jQuery('.AccountContactGetMdl'),
    GetAllMdl   : jQuery('.AccountContactGetAllMdl'),
    CreateMdl   : jQuery('.AccountContactCreateMdl'),
    UpdateMdl   : jQuery('.AccountContactUpdateMdl'),
    DeleteMdl   : jQuery('.AccountContactDeleteMdl'),
    GetMdlBtn   : jQuery('.AccountContactGetMdlBtn'),
    GetAllMdlBtn: jQuery('.AccountContactGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.AccountContactCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.AccountContactUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.AccountContactDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/account-contact/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/account-contact' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/account-contact', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/account-contact/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/account-contact/' + id, null, callBackSuccess, callBackError);
    }
};

const AccountGroup = {
    GetBtn      : jQuery('.AccountGroupGetBtn'),
    GetAllBtn   : jQuery('.AccountGroupGetAllBtn'),
    CreateBtn   : jQuery('.AccountGroupCreateBtn'),
    UpdateBtn   : jQuery('.AccountGroupUpdateBtn'),
    DeleteBtn   : jQuery('.AccountGroupDeleteBtn'),
    GetFrm      : jQuery('.AccountGroupGetFrm'),
    GetAllFrm   : jQuery('.AccountGroupGetAllFrm'),
    CreateFrm   : jQuery('.AccountGroupCreateFrm'),
    UpdateFrm   : jQuery('.AccountGroupUpdateFrm'),
    DeleteFrm   : jQuery('.AccountGroupDeleteFrm'),
    GetMdl      : jQuery('.AccountGroupGetMdl'),
    GetAllMdl   : jQuery('.AccountGroupGetAllMdl'),
    CreateMdl   : jQuery('.AccountGroupCreateMdl'),
    UpdateMdl   : jQuery('.AccountGroupUpdateMdl'),
    DeleteMdl   : jQuery('.AccountGroupDeleteMdl'),
    GetMdlBtn   : jQuery('.AccountGroupGetMdlBtn'),
    GetAllMdlBtn: jQuery('.AccountGroupGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.AccountGroupCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.AccountGroupUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.AccountGroupDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/account-group/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/account-group' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/account-group', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/account-group/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/account-group/' + id, null, callBackSuccess, callBackError);
    }
};

const AccountMovement = {
    GetBtn      : jQuery('.AccountMovementGetBtn'),
    GetAllBtn   : jQuery('.AccountMovementGetAllBtn'),
    CreateBtn   : jQuery('.AccountMovementCreateBtn'),
    UpdateBtn   : jQuery('.AccountMovementUpdateBtn'),
    DeleteBtn   : jQuery('.AccountMovementDeleteBtn'),
    GetFrm      : jQuery('.AccountMovementGetFrm'),
    GetAllFrm   : jQuery('.AccountMovementGetAllFrm'),
    CreateFrm   : jQuery('.AccountMovementCreateFrm'),
    UpdateFrm   : jQuery('.AccountMovementUpdateFrm'),
    DeleteFrm   : jQuery('.AccountMovementDeleteFrm'),
    GetMdl      : jQuery('.AccountMovementGetMdl'),
    GetAllMdl   : jQuery('.AccountMovementGetAllMdl'),
    CreateMdl   : jQuery('.AccountMovementCreateMdl'),
    UpdateMdl   : jQuery('.AccountMovementUpdateMdl'),
    DeleteMdl   : jQuery('.AccountMovementDeleteMdl'),
    GetMdlBtn   : jQuery('.AccountMovementGetMdlBtn'),
    GetAllMdlBtn: jQuery('.AccountMovementGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.AccountMovementCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.AccountMovementUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.AccountMovementDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/account-movement/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/account-movement' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/account-movement', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/account-movement/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/account-movement/' + id, null, callBackSuccess, callBackError);
    }
};

const AccountType = {
    GetBtn      : jQuery('.AccountTypeGetBtn'),
    GetAllBtn   : jQuery('.AccountTypeGetAllBtn'),
    CreateBtn   : jQuery('.AccountTypeCreateBtn'),
    UpdateBtn   : jQuery('.AccountTypeUpdateBtn'),
    DeleteBtn   : jQuery('.AccountTypeDeleteBtn'),
    GetFrm      : jQuery('.AccountTypeGetFrm'),
    GetAllFrm   : jQuery('.AccountTypeGetAllFrm'),
    CreateFrm   : jQuery('.AccountTypeCreateFrm'),
    UpdateFrm   : jQuery('.AccountTypeUpdateFrm'),
    DeleteFrm   : jQuery('.AccountTypeDeleteFrm'),
    GetMdl      : jQuery('.AccountTypeGetMdl'),
    GetAllMdl   : jQuery('.AccountTypeGetAllMdl'),
    CreateMdl   : jQuery('.AccountTypeCreateMdl'),
    UpdateMdl   : jQuery('.AccountTypeUpdateMdl'),
    DeleteMdl   : jQuery('.AccountTypeDeleteMdl'),
    GetMdlBtn   : jQuery('.AccountTypeGetMdlBtn'),
    GetAllMdlBtn: jQuery('.AccountTypeGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.AccountTypeCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.AccountTypeUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.AccountTypeDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/account-type/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/account-type' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/account-type', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/account-type/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/account-type/' + id, null, callBackSuccess, callBackError);
    }
};

const BankAccount = {
    GetBtn      : jQuery('.BankAccountGetBtn'),
    GetAllBtn   : jQuery('.BankAccountGetAllBtn'),
    CreateBtn   : jQuery('.BankAccountCreateBtn'),
    UpdateBtn   : jQuery('.BankAccountUpdateBtn'),
    DeleteBtn   : jQuery('.BankAccountDeleteBtn'),
    GetFrm      : jQuery('.BankAccountGetFrm'),
    GetAllFrm   : jQuery('.BankAccountGetAllFrm'),
    CreateFrm   : jQuery('.BankAccountCreateFrm'),
    UpdateFrm   : jQuery('.BankAccountUpdateFrm'),
    DeleteFrm   : jQuery('.BankAccountDeleteFrm'),
    GetMdl      : jQuery('.BankAccountGetMdl'),
    GetAllMdl   : jQuery('.BankAccountGetAllMdl'),
    CreateMdl   : jQuery('.BankAccountCreateMdl'),
    UpdateMdl   : jQuery('.BankAccountUpdateMdl'),
    DeleteMdl   : jQuery('.BankAccountDeleteMdl'),
    GetMdlBtn   : jQuery('.BankAccountGetMdlBtn'),
    GetAllMdlBtn: jQuery('.BankAccountGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.BankAccountCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.BankAccountUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.BankAccountDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/bank-account/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/bank-account' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/bank-account', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/bank-account/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/bank-account/' + id, null, callBackSuccess, callBackError);
    }
};

const BankMovement = {
    GetBtn      : jQuery('.BankMovementGetBtn'),
    GetAllBtn   : jQuery('.BankMovementGetAllBtn'),
    CreateBtn   : jQuery('.BankMovementCreateBtn'),
    UpdateBtn   : jQuery('.BankMovementUpdateBtn'),
    DeleteBtn   : jQuery('.BankMovementDeleteBtn'),
    GetFrm      : jQuery('.BankMovementGetFrm'),
    GetAllFrm   : jQuery('.BankMovementGetAllFrm'),
    CreateFrm   : jQuery('.BankMovementCreateFrm'),
    UpdateFrm   : jQuery('.BankMovementUpdateFrm'),
    DeleteFrm   : jQuery('.BankMovementDeleteFrm'),
    GetMdl      : jQuery('.BankMovementGetMdl'),
    GetAllMdl   : jQuery('.BankMovementGetAllMdl'),
    CreateMdl   : jQuery('.BankMovementCreateMdl'),
    UpdateMdl   : jQuery('.BankMovementUpdateMdl'),
    DeleteMdl   : jQuery('.BankMovementDeleteMdl'),
    GetMdlBtn   : jQuery('.BankMovementGetMdlBtn'),
    GetAllMdlBtn: jQuery('.BankMovementGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.BankMovementCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.BankMovementUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.BankMovementDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/bank-movement/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/bank-movement' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/bank-movement', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/bank-movement/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/bank-movement/' + id, null, callBackSuccess, callBackError);
    }
};

const CashMovement = {
    GetBtn      : jQuery('.CashMovementGetBtn'),
    GetAllBtn   : jQuery('.CashMovementGetAllBtn'),
    CreateBtn   : jQuery('.CashMovementCreateBtn'),
    UpdateBtn   : jQuery('.CashMovementUpdateBtn'),
    DeleteBtn   : jQuery('.CashMovementDeleteBtn'),
    GetFrm      : jQuery('.CashMovementGetFrm'),
    GetAllFrm   : jQuery('.CashMovementGetAllFrm'),
    CreateFrm   : jQuery('.CashMovementCreateFrm'),
    UpdateFrm   : jQuery('.CashMovementUpdateFrm'),
    DeleteFrm   : jQuery('.CashMovementDeleteFrm'),
    GetMdl      : jQuery('.CashMovementGetMdl'),
    GetAllMdl   : jQuery('.CashMovementGetAllMdl'),
    CreateMdl   : jQuery('.CashMovementCreateMdl'),
    UpdateMdl   : jQuery('.CashMovementUpdateMdl'),
    DeleteMdl   : jQuery('.CashMovementDeleteMdl'),
    GetMdlBtn   : jQuery('.CashMovementGetMdlBtn'),
    GetAllMdlBtn: jQuery('.CashMovementGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.CashMovementCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.CashMovementUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.CashMovementDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/cash-movement/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/cash-movement' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/cash-movement', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/cash-movement/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/cash-movement/' + id, null, callBackSuccess, callBackError);
    }
};

const CashType = {
    GetBtn      : jQuery('.CashTypeGetBtn'),
    GetAllBtn   : jQuery('.CashTypeGetAllBtn'),
    CreateBtn   : jQuery('.CashTypeCreateBtn'),
    UpdateBtn   : jQuery('.CashTypeUpdateBtn'),
    DeleteBtn   : jQuery('.CashTypeDeleteBtn'),
    GetFrm      : jQuery('.CashTypeGetFrm'),
    GetAllFrm   : jQuery('.CashTypeGetAllFrm'),
    CreateFrm   : jQuery('.CashTypeCreateFrm'),
    UpdateFrm   : jQuery('.CashTypeUpdateFrm'),
    DeleteFrm   : jQuery('.CashTypeDeleteFrm'),
    GetMdl      : jQuery('.CashTypeGetMdl'),
    GetAllMdl   : jQuery('.CashTypeGetAllMdl'),
    CreateMdl   : jQuery('.CashTypeCreateMdl'),
    UpdateMdl   : jQuery('.CashTypeUpdateMdl'),
    DeleteMdl   : jQuery('.CashTypeDeleteMdl'),
    GetMdlBtn   : jQuery('.CashTypeGetMdlBtn'),
    GetAllMdlBtn: jQuery('.CashTypeGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.CashTypeCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.CashTypeUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.CashTypeDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/cash-type/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/cash-type' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/cash-type', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/cash-type/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/cash-type/' + id, null, callBackSuccess, callBackError);
    }
};

const CreditCardInfo = {
    GetBtn      : jQuery('.CreditCardInfoGetBtn'),
    GetAllBtn   : jQuery('.CreditCardInfoGetAllBtn'),
    CreateBtn   : jQuery('.CreditCardInfoCreateBtn'),
    UpdateBtn   : jQuery('.CreditCardInfoUpdateBtn'),
    DeleteBtn   : jQuery('.CreditCardInfoDeleteBtn'),
    GetFrm      : jQuery('.CreditCardInfoGetFrm'),
    GetAllFrm   : jQuery('.CreditCardInfoGetAllFrm'),
    CreateFrm   : jQuery('.CreditCardInfoCreateFrm'),
    UpdateFrm   : jQuery('.CreditCardInfoUpdateFrm'),
    DeleteFrm   : jQuery('.CreditCardInfoDeleteFrm'),
    GetMdl      : jQuery('.CreditCardInfoGetMdl'),
    GetAllMdl   : jQuery('.CreditCardInfoGetAllMdl'),
    CreateMdl   : jQuery('.CreditCardInfoCreateMdl'),
    UpdateMdl   : jQuery('.CreditCardInfoUpdateMdl'),
    DeleteMdl   : jQuery('.CreditCardInfoDeleteMdl'),
    GetMdlBtn   : jQuery('.CreditCardInfoGetMdlBtn'),
    GetAllMdlBtn: jQuery('.CreditCardInfoGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.CreditCardInfoCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.CreditCardInfoUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.CreditCardInfoDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/credit-card-info/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/credit-card-info' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/credit-card-info', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/credit-card-info/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/credit-card-info/' + id, null, callBackSuccess, callBackError);
    }
};

const Expense = {
    GetBtn      : jQuery('.ExpenseGetBtn'),
    GetAllBtn   : jQuery('.ExpenseGetAllBtn'),
    CreateBtn   : jQuery('.ExpenseCreateBtn'),
    UpdateBtn   : jQuery('.ExpenseUpdateBtn'),
    DeleteBtn   : jQuery('.ExpenseDeleteBtn'),
    GetFrm      : jQuery('.ExpenseGetFrm'),
    GetAllFrm   : jQuery('.ExpenseGetAllFrm'),
    CreateFrm   : jQuery('.ExpenseCreateFrm'),
    UpdateFrm   : jQuery('.ExpenseUpdateFrm'),
    DeleteFrm   : jQuery('.ExpenseDeleteFrm'),
    GetMdl      : jQuery('.ExpenseGetMdl'),
    GetAllMdl   : jQuery('.ExpenseGetAllMdl'),
    CreateMdl   : jQuery('.ExpenseCreateMdl'),
    UpdateMdl   : jQuery('.ExpenseUpdateMdl'),
    DeleteMdl   : jQuery('.ExpenseDeleteMdl'),
    GetMdlBtn   : jQuery('.ExpenseGetMdlBtn'),
    GetAllMdlBtn: jQuery('.ExpenseGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.ExpenseCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.ExpenseUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.ExpenseDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/expense/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/expense' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/expense', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/expense/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/expense/' + id, null, callBackSuccess, callBackError);
    }
};

const Income = {
    GetBtn      : jQuery('.IncomeGetBtn'),
    GetAllBtn   : jQuery('.IncomeGetAllBtn'),
    CreateBtn   : jQuery('.IncomeCreateBtn'),
    UpdateBtn   : jQuery('.IncomeUpdateBtn'),
    DeleteBtn   : jQuery('.IncomeDeleteBtn'),
    GetFrm      : jQuery('.IncomeGetFrm'),
    GetAllFrm   : jQuery('.IncomeGetAllFrm'),
    CreateFrm   : jQuery('.IncomeCreateFrm'),
    UpdateFrm   : jQuery('.IncomeUpdateFrm'),
    DeleteFrm   : jQuery('.IncomeDeleteFrm'),
    GetMdl      : jQuery('.IncomeGetMdl'),
    GetAllMdl   : jQuery('.IncomeGetAllMdl'),
    CreateMdl   : jQuery('.IncomeCreateMdl'),
    UpdateMdl   : jQuery('.IncomeUpdateMdl'),
    DeleteMdl   : jQuery('.IncomeDeleteMdl'),
    GetMdlBtn   : jQuery('.IncomeGetMdlBtn'),
    GetAllMdlBtn: jQuery('.IncomeGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.IncomeCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.IncomeUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.IncomeDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/income/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/income' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/income', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/income/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/income/' + id, null, callBackSuccess, callBackError);
    }
};

const IncomeExpenseCategory = {
    GetBtn      : jQuery('.IncomeExpenseCategoryGetBtn'),
    GetAllBtn   : jQuery('.IncomeExpenseCategoryGetAllBtn'),
    CreateBtn   : jQuery('.IncomeExpenseCategoryCreateBtn'),
    UpdateBtn   : jQuery('.IncomeExpenseCategoryUpdateBtn'),
    DeleteBtn   : jQuery('.IncomeExpenseCategoryDeleteBtn'),
    GetFrm      : jQuery('.IncomeExpenseCategoryGetFrm'),
    GetAllFrm   : jQuery('.IncomeExpenseCategoryGetAllFrm'),
    CreateFrm   : jQuery('.IncomeExpenseCategoryCreateFrm'),
    UpdateFrm   : jQuery('.IncomeExpenseCategoryUpdateFrm'),
    DeleteFrm   : jQuery('.IncomeExpenseCategoryDeleteFrm'),
    GetMdl      : jQuery('.IncomeExpenseCategoryGetMdl'),
    GetAllMdl   : jQuery('.IncomeExpenseCategoryGetAllMdl'),
    CreateMdl   : jQuery('.IncomeExpenseCategoryCreateMdl'),
    UpdateMdl   : jQuery('.IncomeExpenseCategoryUpdateMdl'),
    DeleteMdl   : jQuery('.IncomeExpenseCategoryDeleteMdl'),
    GetMdlBtn   : jQuery('.IncomeExpenseCategoryGetMdlBtn'),
    GetAllMdlBtn: jQuery('.IncomeExpenseCategoryGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.IncomeExpenseCategoryCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.IncomeExpenseCategoryUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.IncomeExpenseCategoryDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/income-expense-category/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/income-expense-category' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/income-expense-category', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/income-expense-category/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/income-expense-category/' + id, null, callBackSuccess, callBackError);
    }
};

const IncomeExpenseType = {
    GetBtn      : jQuery('.IncomeExpenseTypeGetBtn'),
    GetAllBtn   : jQuery('.IncomeExpenseTypeGetAllBtn'),
    CreateBtn   : jQuery('.IncomeExpenseTypeCreateBtn'),
    UpdateBtn   : jQuery('.IncomeExpenseTypeUpdateBtn'),
    DeleteBtn   : jQuery('.IncomeExpenseTypeDeleteBtn'),
    GetFrm      : jQuery('.IncomeExpenseTypeGetFrm'),
    GetAllFrm   : jQuery('.IncomeExpenseTypeGetAllFrm'),
    CreateFrm   : jQuery('.IncomeExpenseTypeCreateFrm'),
    UpdateFrm   : jQuery('.IncomeExpenseTypeUpdateFrm'),
    DeleteFrm   : jQuery('.IncomeExpenseTypeDeleteFrm'),
    GetMdl      : jQuery('.IncomeExpenseTypeGetMdl'),
    GetAllMdl   : jQuery('.IncomeExpenseTypeGetAllMdl'),
    CreateMdl   : jQuery('.IncomeExpenseTypeCreateMdl'),
    UpdateMdl   : jQuery('.IncomeExpenseTypeUpdateMdl'),
    DeleteMdl   : jQuery('.IncomeExpenseTypeDeleteMdl'),
    GetMdlBtn   : jQuery('.IncomeExpenseTypeGetMdlBtn'),
    GetAllMdlBtn: jQuery('.IncomeExpenseTypeGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.IncomeExpenseTypeCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.IncomeExpenseTypeUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.IncomeExpenseTypeDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/income-expense-type/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/income-expense-type' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/income-expense-type', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/income-expense-type/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/income-expense-type/' + id, null, callBackSuccess, callBackError);
    }
};

const Invoice = {
    GetBtn      : jQuery('.InvoiceGetBtn'),
    GetAllBtn   : jQuery('.InvoiceGetAllBtn'),
    CreateBtn   : jQuery('.InvoiceCreateBtn'),
    UpdateBtn   : jQuery('.InvoiceUpdateBtn'),
    DeleteBtn   : jQuery('.InvoiceDeleteBtn'),
    GetFrm      : jQuery('.InvoiceGetFrm'),
    GetAllFrm   : jQuery('.InvoiceGetAllFrm'),
    CreateFrm   : jQuery('.InvoiceCreateFrm'),
    UpdateFrm   : jQuery('.InvoiceUpdateFrm'),
    DeleteFrm   : jQuery('.InvoiceDeleteFrm'),
    GetMdl      : jQuery('.InvoiceGetMdl'),
    GetAllMdl   : jQuery('.InvoiceGetAllMdl'),
    CreateMdl   : jQuery('.InvoiceCreateMdl'),
    UpdateMdl   : jQuery('.InvoiceUpdateMdl'),
    DeleteMdl   : jQuery('.InvoiceDeleteMdl'),
    GetMdlBtn   : jQuery('.InvoiceGetMdlBtn'),
    GetAllMdlBtn: jQuery('.InvoiceGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.InvoiceCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.InvoiceUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.InvoiceDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/invoice/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/invoice' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/invoice', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/invoice/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/invoice/' + id, null, callBackSuccess, callBackError);
    }
};

const InvoiceDetail = {
    GetBtn      : jQuery('.InvoiceDetailGetBtn'),
    GetAllBtn   : jQuery('.InvoiceDetailGetAllBtn'),
    CreateBtn   : jQuery('.InvoiceDetailCreateBtn'),
    UpdateBtn   : jQuery('.InvoiceDetailUpdateBtn'),
    DeleteBtn   : jQuery('.InvoiceDetailDeleteBtn'),
    GetFrm      : jQuery('.InvoiceDetailGetFrm'),
    GetAllFrm   : jQuery('.InvoiceDetailGetAllFrm'),
    CreateFrm   : jQuery('.InvoiceDetailCreateFrm'),
    UpdateFrm   : jQuery('.InvoiceDetailUpdateFrm'),
    DeleteFrm   : jQuery('.InvoiceDetailDeleteFrm'),
    GetMdl      : jQuery('.InvoiceDetailGetMdl'),
    GetAllMdl   : jQuery('.InvoiceDetailGetAllMdl'),
    CreateMdl   : jQuery('.InvoiceDetailCreateMdl'),
    UpdateMdl   : jQuery('.InvoiceDetailUpdateMdl'),
    DeleteMdl   : jQuery('.InvoiceDetailDeleteMdl'),
    GetMdlBtn   : jQuery('.InvoiceDetailGetMdlBtn'),
    GetAllMdlBtn: jQuery('.InvoiceDetailGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.InvoiceDetailCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.InvoiceDetailUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.InvoiceDetailDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/invoice-detail/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/invoice-detail' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/invoice-detail', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/invoice-detail/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/invoice-detail/' + id, null, callBackSuccess, callBackError);
    }
};

const InvoicePaymentMethod = {
    GetBtn      : jQuery('.InvoicePaymentMethodGetBtn'),
    GetAllBtn   : jQuery('.InvoicePaymentMethodGetAllBtn'),
    CreateBtn   : jQuery('.InvoicePaymentMethodCreateBtn'),
    UpdateBtn   : jQuery('.InvoicePaymentMethodUpdateBtn'),
    DeleteBtn   : jQuery('.InvoicePaymentMethodDeleteBtn'),
    GetFrm      : jQuery('.InvoicePaymentMethodGetFrm'),
    GetAllFrm   : jQuery('.InvoicePaymentMethodGetAllFrm'),
    CreateFrm   : jQuery('.InvoicePaymentMethodCreateFrm'),
    UpdateFrm   : jQuery('.InvoicePaymentMethodUpdateFrm'),
    DeleteFrm   : jQuery('.InvoicePaymentMethodDeleteFrm'),
    GetMdl      : jQuery('.InvoicePaymentMethodGetMdl'),
    GetAllMdl   : jQuery('.InvoicePaymentMethodGetAllMdl'),
    CreateMdl   : jQuery('.InvoicePaymentMethodCreateMdl'),
    UpdateMdl   : jQuery('.InvoicePaymentMethodUpdateMdl'),
    DeleteMdl   : jQuery('.InvoicePaymentMethodDeleteMdl'),
    GetMdlBtn   : jQuery('.InvoicePaymentMethodGetMdlBtn'),
    GetAllMdlBtn: jQuery('.InvoicePaymentMethodGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.InvoicePaymentMethodCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.InvoicePaymentMethodUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.InvoicePaymentMethodDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/invoice-payment-method/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/invoice-payment-method' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/invoice-payment-method', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/invoice-payment-method/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/invoice-payment-method/' + id, null, callBackSuccess, callBackError);
    }
};

const InvoiceSeries = {
    GetBtn      : jQuery('.InvoiceSeriesGetBtn'),
    GetAllBtn   : jQuery('.InvoiceSeriesGetAllBtn'),
    CreateBtn   : jQuery('.InvoiceSeriesCreateBtn'),
    UpdateBtn   : jQuery('.InvoiceSeriesUpdateBtn'),
    DeleteBtn   : jQuery('.InvoiceSeriesDeleteBtn'),
    GetFrm      : jQuery('.InvoiceSeriesGetFrm'),
    GetAllFrm   : jQuery('.InvoiceSeriesGetAllFrm'),
    CreateFrm   : jQuery('.InvoiceSeriesCreateFrm'),
    UpdateFrm   : jQuery('.InvoiceSeriesUpdateFrm'),
    DeleteFrm   : jQuery('.InvoiceSeriesDeleteFrm'),
    GetMdl      : jQuery('.InvoiceSeriesGetMdl'),
    GetAllMdl   : jQuery('.InvoiceSeriesGetAllMdl'),
    CreateMdl   : jQuery('.InvoiceSeriesCreateMdl'),
    UpdateMdl   : jQuery('.InvoiceSeriesUpdateMdl'),
    DeleteMdl   : jQuery('.InvoiceSeriesDeleteMdl'),
    GetMdlBtn   : jQuery('.InvoiceSeriesGetMdlBtn'),
    GetAllMdlBtn: jQuery('.InvoiceSeriesGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.InvoiceSeriesCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.InvoiceSeriesUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.InvoiceSeriesDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/invoice-series/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/invoice-series' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/invoice-series', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/invoice-series/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/invoice-series/' + id, null, callBackSuccess, callBackError);
    }
};

const InvoiceStatus = {
    GetBtn      : jQuery('.InvoiceStatusGetBtn'),
    GetAllBtn   : jQuery('.InvoiceStatusGetAllBtn'),
    CreateBtn   : jQuery('.InvoiceStatusCreateBtn'),
    UpdateBtn   : jQuery('.InvoiceStatusUpdateBtn'),
    DeleteBtn   : jQuery('.InvoiceStatusDeleteBtn'),
    GetFrm      : jQuery('.InvoiceStatusGetFrm'),
    GetAllFrm   : jQuery('.InvoiceStatusGetAllFrm'),
    CreateFrm   : jQuery('.InvoiceStatusCreateFrm'),
    UpdateFrm   : jQuery('.InvoiceStatusUpdateFrm'),
    DeleteFrm   : jQuery('.InvoiceStatusDeleteFrm'),
    GetMdl      : jQuery('.InvoiceStatusGetMdl'),
    GetAllMdl   : jQuery('.InvoiceStatusGetAllMdl'),
    CreateMdl   : jQuery('.InvoiceStatusCreateMdl'),
    UpdateMdl   : jQuery('.InvoiceStatusUpdateMdl'),
    DeleteMdl   : jQuery('.InvoiceStatusDeleteMdl'),
    GetMdlBtn   : jQuery('.InvoiceStatusGetMdlBtn'),
    GetAllMdlBtn: jQuery('.InvoiceStatusGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.InvoiceStatusCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.InvoiceStatusUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.InvoiceStatusDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/invoice-status/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/invoice-status' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/invoice-status', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/invoice-status/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/invoice-status/' + id, null, callBackSuccess, callBackError);
    }
};

const InvoiceType = {
    GetBtn      : jQuery('.InvoiceTypeGetBtn'),
    GetAllBtn   : jQuery('.InvoiceTypeGetAllBtn'),
    CreateBtn   : jQuery('.InvoiceTypeCreateBtn'),
    UpdateBtn   : jQuery('.InvoiceTypeUpdateBtn'),
    DeleteBtn   : jQuery('.InvoiceTypeDeleteBtn'),
    GetFrm      : jQuery('.InvoiceTypeGetFrm'),
    GetAllFrm   : jQuery('.InvoiceTypeGetAllFrm'),
    CreateFrm   : jQuery('.InvoiceTypeCreateFrm'),
    UpdateFrm   : jQuery('.InvoiceTypeUpdateFrm'),
    DeleteFrm   : jQuery('.InvoiceTypeDeleteFrm'),
    GetMdl      : jQuery('.InvoiceTypeGetMdl'),
    GetAllMdl   : jQuery('.InvoiceTypeGetAllMdl'),
    CreateMdl   : jQuery('.InvoiceTypeCreateMdl'),
    UpdateMdl   : jQuery('.InvoiceTypeUpdateMdl'),
    DeleteMdl   : jQuery('.InvoiceTypeDeleteMdl'),
    GetMdlBtn   : jQuery('.InvoiceTypeGetMdlBtn'),
    GetAllMdlBtn: jQuery('.InvoiceTypeGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.InvoiceTypeCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.InvoiceTypeUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.InvoiceTypeDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/invoice-type/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/invoice-type' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/invoice-type', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/invoice-type/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/invoice-type/' + id, null, callBackSuccess, callBackError);
    }
};

const Migration = {
    GetBtn      : jQuery('.MigrationGetBtn'),
    GetAllBtn   : jQuery('.MigrationGetAllBtn'),
    CreateBtn   : jQuery('.MigrationCreateBtn'),
    UpdateBtn   : jQuery('.MigrationUpdateBtn'),
    DeleteBtn   : jQuery('.MigrationDeleteBtn'),
    GetFrm      : jQuery('.MigrationGetFrm'),
    GetAllFrm   : jQuery('.MigrationGetAllFrm'),
    CreateFrm   : jQuery('.MigrationCreateFrm'),
    UpdateFrm   : jQuery('.MigrationUpdateFrm'),
    DeleteFrm   : jQuery('.MigrationDeleteFrm'),
    GetMdl      : jQuery('.MigrationGetMdl'),
    GetAllMdl   : jQuery('.MigrationGetAllMdl'),
    CreateMdl   : jQuery('.MigrationCreateMdl'),
    UpdateMdl   : jQuery('.MigrationUpdateMdl'),
    DeleteMdl   : jQuery('.MigrationDeleteMdl'),
    GetMdlBtn   : jQuery('.MigrationGetMdlBtn'),
    GetAllMdlBtn: jQuery('.MigrationGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.MigrationCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.MigrationUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.MigrationDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/migration/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/migration' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/migration', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/migration/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/migration/' + id, null, callBackSuccess, callBackError);
    }
};

const OnlinePaymentTransaction = {
    GetBtn      : jQuery('.OnlinePaymentTransactionGetBtn'),
    GetAllBtn   : jQuery('.OnlinePaymentTransactionGetAllBtn'),
    CreateBtn   : jQuery('.OnlinePaymentTransactionCreateBtn'),
    UpdateBtn   : jQuery('.OnlinePaymentTransactionUpdateBtn'),
    DeleteBtn   : jQuery('.OnlinePaymentTransactionDeleteBtn'),
    GetFrm      : jQuery('.OnlinePaymentTransactionGetFrm'),
    GetAllFrm   : jQuery('.OnlinePaymentTransactionGetAllFrm'),
    CreateFrm   : jQuery('.OnlinePaymentTransactionCreateFrm'),
    UpdateFrm   : jQuery('.OnlinePaymentTransactionUpdateFrm'),
    DeleteFrm   : jQuery('.OnlinePaymentTransactionDeleteFrm'),
    GetMdl      : jQuery('.OnlinePaymentTransactionGetMdl'),
    GetAllMdl   : jQuery('.OnlinePaymentTransactionGetAllMdl'),
    CreateMdl   : jQuery('.OnlinePaymentTransactionCreateMdl'),
    UpdateMdl   : jQuery('.OnlinePaymentTransactionUpdateMdl'),
    DeleteMdl   : jQuery('.OnlinePaymentTransactionDeleteMdl'),
    GetMdlBtn   : jQuery('.OnlinePaymentTransactionGetMdlBtn'),
    GetAllMdlBtn: jQuery('.OnlinePaymentTransactionGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.OnlinePaymentTransactionCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.OnlinePaymentTransactionUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.OnlinePaymentTransactionDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/online-payment-transaction/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/online-payment-transaction' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/online-payment-transaction', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/online-payment-transaction/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/online-payment-transaction/' + id, null, callBackSuccess, callBackError);
    }
};

const Payment = {
    GetBtn      : jQuery('.PaymentGetBtn'),
    GetAllBtn   : jQuery('.PaymentGetAllBtn'),
    CreateBtn   : jQuery('.PaymentCreateBtn'),
    UpdateBtn   : jQuery('.PaymentUpdateBtn'),
    DeleteBtn   : jQuery('.PaymentDeleteBtn'),
    GetFrm      : jQuery('.PaymentGetFrm'),
    GetAllFrm   : jQuery('.PaymentGetAllFrm'),
    CreateFrm   : jQuery('.PaymentCreateFrm'),
    UpdateFrm   : jQuery('.PaymentUpdateFrm'),
    DeleteFrm   : jQuery('.PaymentDeleteFrm'),
    GetMdl      : jQuery('.PaymentGetMdl'),
    GetAllMdl   : jQuery('.PaymentGetAllMdl'),
    CreateMdl   : jQuery('.PaymentCreateMdl'),
    UpdateMdl   : jQuery('.PaymentUpdateMdl'),
    DeleteMdl   : jQuery('.PaymentDeleteMdl'),
    GetMdlBtn   : jQuery('.PaymentGetMdlBtn'),
    GetAllMdlBtn: jQuery('.PaymentGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.PaymentCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.PaymentUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.PaymentDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/payment/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/payment' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/payment', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/payment/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/payment/' + id, null, callBackSuccess, callBackError);
    }
};

const PaymentMethod = {
    GetBtn      : jQuery('.PaymentMethodGetBtn'),
    GetAllBtn   : jQuery('.PaymentMethodGetAllBtn'),
    CreateBtn   : jQuery('.PaymentMethodCreateBtn'),
    UpdateBtn   : jQuery('.PaymentMethodUpdateBtn'),
    DeleteBtn   : jQuery('.PaymentMethodDeleteBtn'),
    GetFrm      : jQuery('.PaymentMethodGetFrm'),
    GetAllFrm   : jQuery('.PaymentMethodGetAllFrm'),
    CreateFrm   : jQuery('.PaymentMethodCreateFrm'),
    UpdateFrm   : jQuery('.PaymentMethodUpdateFrm'),
    DeleteFrm   : jQuery('.PaymentMethodDeleteFrm'),
    GetMdl      : jQuery('.PaymentMethodGetMdl'),
    GetAllMdl   : jQuery('.PaymentMethodGetAllMdl'),
    CreateMdl   : jQuery('.PaymentMethodCreateMdl'),
    UpdateMdl   : jQuery('.PaymentMethodUpdateMdl'),
    DeleteMdl   : jQuery('.PaymentMethodDeleteMdl'),
    GetMdlBtn   : jQuery('.PaymentMethodGetMdlBtn'),
    GetAllMdlBtn: jQuery('.PaymentMethodGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.PaymentMethodCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.PaymentMethodUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.PaymentMethodDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/payment-method/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/payment-method' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/payment-method', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/payment-method/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/payment-method/' + id, null, callBackSuccess, callBackError);
    }
};

const PaymentProvider = {
    GetBtn      : jQuery('.PaymentProviderGetBtn'),
    GetAllBtn   : jQuery('.PaymentProviderGetAllBtn'),
    CreateBtn   : jQuery('.PaymentProviderCreateBtn'),
    UpdateBtn   : jQuery('.PaymentProviderUpdateBtn'),
    DeleteBtn   : jQuery('.PaymentProviderDeleteBtn'),
    GetFrm      : jQuery('.PaymentProviderGetFrm'),
    GetAllFrm   : jQuery('.PaymentProviderGetAllFrm'),
    CreateFrm   : jQuery('.PaymentProviderCreateFrm'),
    UpdateFrm   : jQuery('.PaymentProviderUpdateFrm'),
    DeleteFrm   : jQuery('.PaymentProviderDeleteFrm'),
    GetMdl      : jQuery('.PaymentProviderGetMdl'),
    GetAllMdl   : jQuery('.PaymentProviderGetAllMdl'),
    CreateMdl   : jQuery('.PaymentProviderCreateMdl'),
    UpdateMdl   : jQuery('.PaymentProviderUpdateMdl'),
    DeleteMdl   : jQuery('.PaymentProviderDeleteMdl'),
    GetMdlBtn   : jQuery('.PaymentProviderGetMdlBtn'),
    GetAllMdlBtn: jQuery('.PaymentProviderGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.PaymentProviderCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.PaymentProviderUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.PaymentProviderDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/payment-provider/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/payment-provider' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/payment-provider', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/payment-provider/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/payment-provider/' + id, null, callBackSuccess, callBackError);
    }
};

const PaymentStatus = {
    GetBtn      : jQuery('.PaymentStatusGetBtn'),
    GetAllBtn   : jQuery('.PaymentStatusGetAllBtn'),
    CreateBtn   : jQuery('.PaymentStatusCreateBtn'),
    UpdateBtn   : jQuery('.PaymentStatusUpdateBtn'),
    DeleteBtn   : jQuery('.PaymentStatusDeleteBtn'),
    GetFrm      : jQuery('.PaymentStatusGetFrm'),
    GetAllFrm   : jQuery('.PaymentStatusGetAllFrm'),
    CreateFrm   : jQuery('.PaymentStatusCreateFrm'),
    UpdateFrm   : jQuery('.PaymentStatusUpdateFrm'),
    DeleteFrm   : jQuery('.PaymentStatusDeleteFrm'),
    GetMdl      : jQuery('.PaymentStatusGetMdl'),
    GetAllMdl   : jQuery('.PaymentStatusGetAllMdl'),
    CreateMdl   : jQuery('.PaymentStatusCreateMdl'),
    UpdateMdl   : jQuery('.PaymentStatusUpdateMdl'),
    DeleteMdl   : jQuery('.PaymentStatusDeleteMdl'),
    GetMdlBtn   : jQuery('.PaymentStatusGetMdlBtn'),
    GetAllMdlBtn: jQuery('.PaymentStatusGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.PaymentStatusCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.PaymentStatusUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.PaymentStatusDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/payment-status/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/payment-status' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/payment-status', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/payment-status/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/payment-status/' + id, null, callBackSuccess, callBackError);
    }
};

const Permission = {
    GetBtn      : jQuery('.PermissionGetBtn'),
    GetAllBtn   : jQuery('.PermissionGetAllBtn'),
    CreateBtn   : jQuery('.PermissionCreateBtn'),
    UpdateBtn   : jQuery('.PermissionUpdateBtn'),
    DeleteBtn   : jQuery('.PermissionDeleteBtn'),
    GetFrm      : jQuery('.PermissionGetFrm'),
    GetAllFrm   : jQuery('.PermissionGetAllFrm'),
    CreateFrm   : jQuery('.PermissionCreateFrm'),
    UpdateFrm   : jQuery('.PermissionUpdateFrm'),
    DeleteFrm   : jQuery('.PermissionDeleteFrm'),
    GetMdl      : jQuery('.PermissionGetMdl'),
    GetAllMdl   : jQuery('.PermissionGetAllMdl'),
    CreateMdl   : jQuery('.PermissionCreateMdl'),
    UpdateMdl   : jQuery('.PermissionUpdateMdl'),
    DeleteMdl   : jQuery('.PermissionDeleteMdl'),
    GetMdlBtn   : jQuery('.PermissionGetMdlBtn'),
    GetAllMdlBtn: jQuery('.PermissionGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.PermissionCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.PermissionUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.PermissionDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/permission/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/permission' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/permission', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/permission/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/permission/' + id, null, callBackSuccess, callBackError);
    }
};

const Product = {
    GetBtn      : jQuery('.ProductGetBtn'),
    GetAllBtn   : jQuery('.ProductGetAllBtn'),
    CreateBtn   : jQuery('.ProductCreateBtn'),
    UpdateBtn   : jQuery('.ProductUpdateBtn'),
    DeleteBtn   : jQuery('.ProductDeleteBtn'),
    GetFrm      : jQuery('.ProductGetFrm'),
    GetAllFrm   : jQuery('.ProductGetAllFrm'),
    CreateFrm   : jQuery('.ProductCreateFrm'),
    UpdateFrm   : jQuery('.ProductUpdateFrm'),
    DeleteFrm   : jQuery('.ProductDeleteFrm'),
    GetMdl      : jQuery('.ProductGetMdl'),
    GetAllMdl   : jQuery('.ProductGetAllMdl'),
    CreateMdl   : jQuery('.ProductCreateMdl'),
    UpdateMdl   : jQuery('.ProductUpdateMdl'),
    DeleteMdl   : jQuery('.ProductDeleteMdl'),
    GetMdlBtn   : jQuery('.ProductGetMdlBtn'),
    GetAllMdlBtn: jQuery('.ProductGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.ProductCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.ProductUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.ProductDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/product/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/product' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/product', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/product/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/product/' + id, null, callBackSuccess, callBackError);
    }
};

const ProductBrand = {
    GetBtn      : jQuery('.ProductBrandGetBtn'),
    GetAllBtn   : jQuery('.ProductBrandGetAllBtn'),
    CreateBtn   : jQuery('.ProductBrandCreateBtn'),
    UpdateBtn   : jQuery('.ProductBrandUpdateBtn'),
    DeleteBtn   : jQuery('.ProductBrandDeleteBtn'),
    GetFrm      : jQuery('.ProductBrandGetFrm'),
    GetAllFrm   : jQuery('.ProductBrandGetAllFrm'),
    CreateFrm   : jQuery('.ProductBrandCreateFrm'),
    UpdateFrm   : jQuery('.ProductBrandUpdateFrm'),
    DeleteFrm   : jQuery('.ProductBrandDeleteFrm'),
    GetMdl      : jQuery('.ProductBrandGetMdl'),
    GetAllMdl   : jQuery('.ProductBrandGetAllMdl'),
    CreateMdl   : jQuery('.ProductBrandCreateMdl'),
    UpdateMdl   : jQuery('.ProductBrandUpdateMdl'),
    DeleteMdl   : jQuery('.ProductBrandDeleteMdl'),
    GetMdlBtn   : jQuery('.ProductBrandGetMdlBtn'),
    GetAllMdlBtn: jQuery('.ProductBrandGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.ProductBrandCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.ProductBrandUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.ProductBrandDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/product-brand/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/product-brand' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/product-brand', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/product-brand/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/product-brand/' + id, null, callBackSuccess, callBackError);
    }
};

const ProductCategory = {
    GetBtn      : jQuery('.ProductCategoryGetBtn'),
    GetAllBtn   : jQuery('.ProductCategoryGetAllBtn'),
    CreateBtn   : jQuery('.ProductCategoryCreateBtn'),
    UpdateBtn   : jQuery('.ProductCategoryUpdateBtn'),
    DeleteBtn   : jQuery('.ProductCategoryDeleteBtn'),
    GetFrm      : jQuery('.ProductCategoryGetFrm'),
    GetAllFrm   : jQuery('.ProductCategoryGetAllFrm'),
    CreateFrm   : jQuery('.ProductCategoryCreateFrm'),
    UpdateFrm   : jQuery('.ProductCategoryUpdateFrm'),
    DeleteFrm   : jQuery('.ProductCategoryDeleteFrm'),
    GetMdl      : jQuery('.ProductCategoryGetMdl'),
    GetAllMdl   : jQuery('.ProductCategoryGetAllMdl'),
    CreateMdl   : jQuery('.ProductCategoryCreateMdl'),
    UpdateMdl   : jQuery('.ProductCategoryUpdateMdl'),
    DeleteMdl   : jQuery('.ProductCategoryDeleteMdl'),
    GetMdlBtn   : jQuery('.ProductCategoryGetMdlBtn'),
    GetAllMdlBtn: jQuery('.ProductCategoryGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.ProductCategoryCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.ProductCategoryUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.ProductCategoryDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/product-category/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/product-category' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/product-category', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/product-category/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/product-category/' + id, null, callBackSuccess, callBackError);
    }
};

const ProductFeature = {
    GetBtn      : jQuery('.ProductFeatureGetBtn'),
    GetAllBtn   : jQuery('.ProductFeatureGetAllBtn'),
    CreateBtn   : jQuery('.ProductFeatureCreateBtn'),
    UpdateBtn   : jQuery('.ProductFeatureUpdateBtn'),
    DeleteBtn   : jQuery('.ProductFeatureDeleteBtn'),
    GetFrm      : jQuery('.ProductFeatureGetFrm'),
    GetAllFrm   : jQuery('.ProductFeatureGetAllFrm'),
    CreateFrm   : jQuery('.ProductFeatureCreateFrm'),
    UpdateFrm   : jQuery('.ProductFeatureUpdateFrm'),
    DeleteFrm   : jQuery('.ProductFeatureDeleteFrm'),
    GetMdl      : jQuery('.ProductFeatureGetMdl'),
    GetAllMdl   : jQuery('.ProductFeatureGetAllMdl'),
    CreateMdl   : jQuery('.ProductFeatureCreateMdl'),
    UpdateMdl   : jQuery('.ProductFeatureUpdateMdl'),
    DeleteMdl   : jQuery('.ProductFeatureDeleteMdl'),
    GetMdlBtn   : jQuery('.ProductFeatureGetMdlBtn'),
    GetAllMdlBtn: jQuery('.ProductFeatureGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.ProductFeatureCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.ProductFeatureUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.ProductFeatureDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/product-feature/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/product-feature' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/product-feature', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/product-feature/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/product-feature/' + id, null, callBackSuccess, callBackError);
    }
};

const RefundTransaction = {
    GetBtn      : jQuery('.RefundTransactionGetBtn'),
    GetAllBtn   : jQuery('.RefundTransactionGetAllBtn'),
    CreateBtn   : jQuery('.RefundTransactionCreateBtn'),
    UpdateBtn   : jQuery('.RefundTransactionUpdateBtn'),
    DeleteBtn   : jQuery('.RefundTransactionDeleteBtn'),
    GetFrm      : jQuery('.RefundTransactionGetFrm'),
    GetAllFrm   : jQuery('.RefundTransactionGetAllFrm'),
    CreateFrm   : jQuery('.RefundTransactionCreateFrm'),
    UpdateFrm   : jQuery('.RefundTransactionUpdateFrm'),
    DeleteFrm   : jQuery('.RefundTransactionDeleteFrm'),
    GetMdl      : jQuery('.RefundTransactionGetMdl'),
    GetAllMdl   : jQuery('.RefundTransactionGetAllMdl'),
    CreateMdl   : jQuery('.RefundTransactionCreateMdl'),
    UpdateMdl   : jQuery('.RefundTransactionUpdateMdl'),
    DeleteMdl   : jQuery('.RefundTransactionDeleteMdl'),
    GetMdlBtn   : jQuery('.RefundTransactionGetMdlBtn'),
    GetAllMdlBtn: jQuery('.RefundTransactionGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.RefundTransactionCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.RefundTransactionUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.RefundTransactionDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/refund-transaction/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/refund-transaction' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/refund-transaction', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/refund-transaction/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/refund-transaction/' + id, null, callBackSuccess, callBackError);
    }
};

const Role = {
    GetBtn      : jQuery('.RoleGetBtn'),
    GetAllBtn   : jQuery('.RoleGetAllBtn'),
    CreateBtn   : jQuery('.RoleCreateBtn'),
    UpdateBtn   : jQuery('.RoleUpdateBtn'),
    DeleteBtn   : jQuery('.RoleDeleteBtn'),
    GetFrm      : jQuery('.RoleGetFrm'),
    GetAllFrm   : jQuery('.RoleGetAllFrm'),
    CreateFrm   : jQuery('.RoleCreateFrm'),
    UpdateFrm   : jQuery('.RoleUpdateFrm'),
    DeleteFrm   : jQuery('.RoleDeleteFrm'),
    GetMdl      : jQuery('.RoleGetMdl'),
    GetAllMdl   : jQuery('.RoleGetAllMdl'),
    CreateMdl   : jQuery('.RoleCreateMdl'),
    UpdateMdl   : jQuery('.RoleUpdateMdl'),
    DeleteMdl   : jQuery('.RoleDeleteMdl'),
    GetMdlBtn   : jQuery('.RoleGetMdlBtn'),
    GetAllMdlBtn: jQuery('.RoleGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.RoleCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.RoleUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.RoleDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/role/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/role' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/role', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/role/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/role/' + id, null, callBackSuccess, callBackError);
    }
};

const Settings = {
    GetBtn      : jQuery('.SettingsGetBtn'),
    GetAllBtn   : jQuery('.SettingsGetAllBtn'),
    CreateBtn   : jQuery('.SettingsCreateBtn'),
    UpdateBtn   : jQuery('.SettingsUpdateBtn'),
    DeleteBtn   : jQuery('.SettingsDeleteBtn'),
    GetFrm      : jQuery('.SettingsGetFrm'),
    GetAllFrm   : jQuery('.SettingsGetAllFrm'),
    CreateFrm   : jQuery('.SettingsCreateFrm'),
    UpdateFrm   : jQuery('.SettingsUpdateFrm'),
    DeleteFrm   : jQuery('.SettingsDeleteFrm'),
    GetMdl      : jQuery('.SettingsGetMdl'),
    GetAllMdl   : jQuery('.SettingsGetAllMdl'),
    CreateMdl   : jQuery('.SettingsCreateMdl'),
    UpdateMdl   : jQuery('.SettingsUpdateMdl'),
    DeleteMdl   : jQuery('.SettingsDeleteMdl'),
    GetMdlBtn   : jQuery('.SettingsGetMdlBtn'),
    GetAllMdlBtn: jQuery('.SettingsGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.SettingsCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.SettingsUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.SettingsDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/settings/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/settings' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/settings', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/settings/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/settings/' + id, null, callBackSuccess, callBackError);
    }
};

const StockCount = {
    GetBtn      : jQuery('.StockCountGetBtn'),
    GetAllBtn   : jQuery('.StockCountGetAllBtn'),
    CreateBtn   : jQuery('.StockCountCreateBtn'),
    UpdateBtn   : jQuery('.StockCountUpdateBtn'),
    DeleteBtn   : jQuery('.StockCountDeleteBtn'),
    GetFrm      : jQuery('.StockCountGetFrm'),
    GetAllFrm   : jQuery('.StockCountGetAllFrm'),
    CreateFrm   : jQuery('.StockCountCreateFrm'),
    UpdateFrm   : jQuery('.StockCountUpdateFrm'),
    DeleteFrm   : jQuery('.StockCountDeleteFrm'),
    GetMdl      : jQuery('.StockCountGetMdl'),
    GetAllMdl   : jQuery('.StockCountGetAllMdl'),
    CreateMdl   : jQuery('.StockCountCreateMdl'),
    UpdateMdl   : jQuery('.StockCountUpdateMdl'),
    DeleteMdl   : jQuery('.StockCountDeleteMdl'),
    GetMdlBtn   : jQuery('.StockCountGetMdlBtn'),
    GetAllMdlBtn: jQuery('.StockCountGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.StockCountCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.StockCountUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.StockCountDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/stock-count/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/stock-count' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/stock-count', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/stock-count/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/stock-count/' + id, null, callBackSuccess, callBackError);
    }
};

const StockMovement = {
    GetBtn      : jQuery('.StockMovementGetBtn'),
    GetAllBtn   : jQuery('.StockMovementGetAllBtn'),
    CreateBtn   : jQuery('.StockMovementCreateBtn'),
    UpdateBtn   : jQuery('.StockMovementUpdateBtn'),
    DeleteBtn   : jQuery('.StockMovementDeleteBtn'),
    GetFrm      : jQuery('.StockMovementGetFrm'),
    GetAllFrm   : jQuery('.StockMovementGetAllFrm'),
    CreateFrm   : jQuery('.StockMovementCreateFrm'),
    UpdateFrm   : jQuery('.StockMovementUpdateFrm'),
    DeleteFrm   : jQuery('.StockMovementDeleteFrm'),
    GetMdl      : jQuery('.StockMovementGetMdl'),
    GetAllMdl   : jQuery('.StockMovementGetAllMdl'),
    CreateMdl   : jQuery('.StockMovementCreateMdl'),
    UpdateMdl   : jQuery('.StockMovementUpdateMdl'),
    DeleteMdl   : jQuery('.StockMovementDeleteMdl'),
    GetMdlBtn   : jQuery('.StockMovementGetMdlBtn'),
    GetAllMdlBtn: jQuery('.StockMovementGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.StockMovementCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.StockMovementUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.StockMovementDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/stock-movement/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/stock-movement' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/stock-movement', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/stock-movement/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/stock-movement/' + id, null, callBackSuccess, callBackError);
    }
};

const StockWarehouse = {
    GetBtn      : jQuery('.StockWarehouseGetBtn'),
    GetAllBtn   : jQuery('.StockWarehouseGetAllBtn'),
    CreateBtn   : jQuery('.StockWarehouseCreateBtn'),
    UpdateBtn   : jQuery('.StockWarehouseUpdateBtn'),
    DeleteBtn   : jQuery('.StockWarehouseDeleteBtn'),
    GetFrm      : jQuery('.StockWarehouseGetFrm'),
    GetAllFrm   : jQuery('.StockWarehouseGetAllFrm'),
    CreateFrm   : jQuery('.StockWarehouseCreateFrm'),
    UpdateFrm   : jQuery('.StockWarehouseUpdateFrm'),
    DeleteFrm   : jQuery('.StockWarehouseDeleteFrm'),
    GetMdl      : jQuery('.StockWarehouseGetMdl'),
    GetAllMdl   : jQuery('.StockWarehouseGetAllMdl'),
    CreateMdl   : jQuery('.StockWarehouseCreateMdl'),
    UpdateMdl   : jQuery('.StockWarehouseUpdateMdl'),
    DeleteMdl   : jQuery('.StockWarehouseDeleteMdl'),
    GetMdlBtn   : jQuery('.StockWarehouseGetMdlBtn'),
    GetAllMdlBtn: jQuery('.StockWarehouseGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.StockWarehouseCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.StockWarehouseUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.StockWarehouseDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/stock-warehouse/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/stock-warehouse' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/stock-warehouse', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/stock-warehouse/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/stock-warehouse/' + id, null, callBackSuccess, callBackError);
    }
};

const User = {
    GetBtn      : jQuery('.UserGetBtn'),
    GetAllBtn   : jQuery('.UserGetAllBtn'),
    CreateBtn   : jQuery('.UserCreateBtn'),
    UpdateBtn   : jQuery('.UserUpdateBtn'),
    DeleteBtn   : jQuery('.UserDeleteBtn'),
    GetFrm      : jQuery('.UserGetFrm'),
    GetAllFrm   : jQuery('.UserGetAllFrm'),
    CreateFrm   : jQuery('.UserCreateFrm'),
    UpdateFrm   : jQuery('.UserUpdateFrm'),
    DeleteFrm   : jQuery('.UserDeleteFrm'),
    GetMdl      : jQuery('.UserGetMdl'),
    GetAllMdl   : jQuery('.UserGetAllMdl'),
    CreateMdl   : jQuery('.UserCreateMdl'),
    UpdateMdl   : jQuery('.UserUpdateMdl'),
    DeleteMdl   : jQuery('.UserDeleteMdl'),
    GetMdlBtn   : jQuery('.UserGetMdlBtn'),
    GetAllMdlBtn: jQuery('.UserGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.UserCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.UserUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.UserDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/user/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/user' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/user', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/user/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/user/' + id, null, callBackSuccess, callBackError);
    }
};

const UserActivityLog = {
    GetBtn      : jQuery('.UserActivityLogGetBtn'),
    GetAllBtn   : jQuery('.UserActivityLogGetAllBtn'),
    CreateBtn   : jQuery('.UserActivityLogCreateBtn'),
    UpdateBtn   : jQuery('.UserActivityLogUpdateBtn'),
    DeleteBtn   : jQuery('.UserActivityLogDeleteBtn'),
    GetFrm      : jQuery('.UserActivityLogGetFrm'),
    GetAllFrm   : jQuery('.UserActivityLogGetAllFrm'),
    CreateFrm   : jQuery('.UserActivityLogCreateFrm'),
    UpdateFrm   : jQuery('.UserActivityLogUpdateFrm'),
    DeleteFrm   : jQuery('.UserActivityLogDeleteFrm'),
    GetMdl      : jQuery('.UserActivityLogGetMdl'),
    GetAllMdl   : jQuery('.UserActivityLogGetAllMdl'),
    CreateMdl   : jQuery('.UserActivityLogCreateMdl'),
    UpdateMdl   : jQuery('.UserActivityLogUpdateMdl'),
    DeleteMdl   : jQuery('.UserActivityLogDeleteMdl'),
    GetMdlBtn   : jQuery('.UserActivityLogGetMdlBtn'),
    GetAllMdlBtn: jQuery('.UserActivityLogGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.UserActivityLogCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.UserActivityLogUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.UserActivityLogDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/user-activity-log/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/user-activity-log' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/user-activity-log', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/user-activity-log/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/user-activity-log/' + id, null, callBackSuccess, callBackError);
    }
};

const UserRole = {
    GetBtn      : jQuery('.UserRoleGetBtn'),
    GetAllBtn   : jQuery('.UserRoleGetAllBtn'),
    CreateBtn   : jQuery('.UserRoleCreateBtn'),
    UpdateBtn   : jQuery('.UserRoleUpdateBtn'),
    DeleteBtn   : jQuery('.UserRoleDeleteBtn'),
    GetFrm      : jQuery('.UserRoleGetFrm'),
    GetAllFrm   : jQuery('.UserRoleGetAllFrm'),
    CreateFrm   : jQuery('.UserRoleCreateFrm'),
    UpdateFrm   : jQuery('.UserRoleUpdateFrm'),
    DeleteFrm   : jQuery('.UserRoleDeleteFrm'),
    GetMdl      : jQuery('.UserRoleGetMdl'),
    GetAllMdl   : jQuery('.UserRoleGetAllMdl'),
    CreateMdl   : jQuery('.UserRoleCreateMdl'),
    UpdateMdl   : jQuery('.UserRoleUpdateMdl'),
    DeleteMdl   : jQuery('.UserRoleDeleteMdl'),
    GetMdlBtn   : jQuery('.UserRoleGetMdlBtn'),
    GetAllMdlBtn: jQuery('.UserRoleGetAllMdlBtn'),
    CreateMdlBtn: jQuery('.UserRoleCreateMdlBtn'),
    UpdateMdlBtn: jQuery('.UserRoleUpdateMdlBtn'),
    DeleteMdlBtn: jQuery('.UserRoleDeleteMdlBtn'),
    makeRequest : function (type, url, data, callBackSuccess, callBackError) {
        $.ajax({
                   type   : type,
                   url    : url,
                   data   : data,
                   success: function (response) {
                       callBackSuccess(response);
                   },
                   error  : function (response) {
                      callBackError(response);
                   }
               });
    },
    Get         : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('GET', 'api/user-role/' + id, null, callBackSuccess, callBackError);
    },
    GetAll      : function ({queryParams, callBackSuccess = () => {}, callBackError = () => {}}) {
        const url = 'api/user-role' + '?' + $.param(queryParams);
        this.makeRequest('GET', url, null, callBackSuccess, callBackError);
    },
    Create      : function ({data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('POST', 'api/user-role', data, callBackSuccess, callBackError);
    },
    Update      : function ({id, data, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('PUT', 'api/user-role/' + id, data, callBackSuccess, callBackError);
    },
    Delete      : function ({id, callBackSuccess = () => {}, callBackError = () => {}}) {
        this.makeRequest('DELETE', 'api/user-role/' + id, null, callBackSuccess, callBackError);
    }
};

