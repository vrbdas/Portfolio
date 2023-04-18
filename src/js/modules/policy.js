function policy() {
  const policyLink = document.querySelector('#policyLink');
  const policyBlock = document.querySelector('.policy');
  const policyClose = document.querySelector('.policy__close');

  policyLink.addEventListener('click', function() {
    policyBlock.classList.add('active');
  });

  policyClose.addEventListener('click', function() {
    policyBlock.classList.remove('active');
  });
}

export default policy;