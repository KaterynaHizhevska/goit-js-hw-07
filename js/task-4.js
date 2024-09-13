const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isFormValid = true;
    const formData = {};

    for (const element of form.elements) {
        if (element.type !== 'submit') {
            const value = element.value.trim();
             if (value === '') {
        isFormValid = false;
             } else {
                 formData[element.name] = value;
      }
    }
    }
    if (!isFormValid) {
    alert('All form fields must be filled in');
    } else {
        console.log(formData);
        form.reset();
  }
});