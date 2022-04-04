class FormValidator {
    private _inputElement: any;
    private _submitButtonSelector: any;
    private _inactiveButtonClass: any;
    private _errorClass: any;
    private _form: any;
    private _inputList: unknown[];
    private _submitButton: any;
    constructor(obj: any, form: any) {
        this._inputElement = obj.inputElement;
        this._submitButtonSelector = obj.submitButtonSelector;
        this._inactiveButtonClass = obj.inactiveButtonClass;
        this._errorClass = obj.errorClass;
        this._form = form
        this._inputList = Array.from(this._form.querySelectorAll(this._inputElement));
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
    }

    resetValidation() {
        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)
        });
        this._toggleButtonState();
    }

    enableValidation = () => {
        this._setEventListeners();
    }
    _setEventListeners = () => {
        this._toggleButtonState()
        this._inputList.forEach((inputElement: HTMLInputElement) => {
            inputElement.addEventListener('focus', this._checkInputValidity);
            inputElement.addEventListener('blur', this._checkInputValidity);
            inputElement.addEventListener('input', this._toggleButtonState)
            inputElement.addEventListener('input', this._upPlaceholder)
        });
    }

    _upPlaceholder = (inputElement) => {
        const inputName = this._form.querySelector(`.${inputElement.target.name}-field-name`)
        inputName.textContent = inputElement.target.name
    }

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.setAttribute('disabled', 'disabled');
        } else {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.removeAttribute('disabled');
        }
    }

    _hasInvalidInput = () => {
        return this._inputList.some((inputElement: HTMLInputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _checkInputValidity = (evt) => {
            if (!evt.target.validity.valid) {
                this._showInputError(evt.target);
            } else {
                this._hideInputError(evt.target);
            }
    }

    _showInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.name}-error`)
        errorElement.textContent = inputElement.validationMessage;
        errorElement.classList.add(this._errorClass);
    }

    _hideInputError = (inputElement) => {
        const errorElement = this._form.querySelector(`.${inputElement.name}-error`)
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass);
    }
}

export {FormValidator} ;