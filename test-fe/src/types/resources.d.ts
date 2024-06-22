interface Resources {
  api: {
    error: {
      'email-already-exists': 'Email already exists. Please use another email.';
      'email-already-used': 'Email linked with this provider account already in use.';
      'email-does-not-exist': 'Email does not exist. Please check your email and try again.';
      'invalid-credentials': 'Invalid credentials. Please check your credentials and try again.';
      'sign-in-failed': 'Sign in failed';
      'sign-up-failed': 'Sign up failed';
      'something-went-wrong': 'Something went wrong! Please try again later.';
    };
    success: {
      'sign-up-success': 'Sign up success';
      'sign-in-success': 'Sign in success';
      'user-created': 'User created, please check your email to confirm your account.';
    };
  };
  auth: {
    'continue-with': 'Or continue with';
    'email-placeholder': 'email@example.com';
    'name-placeholder': 'Name';
    'password-placeholder': 'Password';
    'sign-in': {
      name: 'Sign In';
      prompt: 'Enter your email and password to sign in to your account';
      suggest: "Don't have an account? Sign Up";
      title: 'Welcome back';
      'with-email': 'Sign In with Email';
      'with-github': 'GitHub';
      'with-google': 'Google';
    };
    'sign-out': 'Sign Out';
    'sign-up': {
      name: 'Sign Up';
      prompt: 'Enter your information below to create your account';
      suggest: 'By clicking continue, you agree to our Terms of Service and Privacy Policy';
      title: 'Create an account';
      'with-email': 'Sign Up with Email';
      'with-google': 'Google';
    };
  };
  common: {
    date: '{{date, DATE_HUGE}}';
    retry: 'Retry';
    'unknown-error': 'An unexpected error has occurred';
  };
  languages: {
    en: 'English';
    'select-language': 'Select Language';
    vi: 'Tiếng Việt';
  };
  metadata: {
    'about-description': 'About Description';
    'about-title': 'About';
    'admin-description': 'Admin Page';
    'admin-title': 'Admin';
    'blog-description': 'Blog Description';
    'blog-title': 'Blog';
    'categories-description': 'Categories Description';
    'categories-title': 'Categories';
    'collections-description': 'Collections Description';
    'collections-title': 'Collections';
    'error-404-description': '404 Page';
    'error-404-title': '404';
    'home-description': 'Boilerplate for Next.js application';
    'home-title': '';
    'learn-description': 'Learn Description';
    'learn-title': 'Learn';
    'recipes-description': 'Recipes Description';
    'recipes-title': 'Recipes';
    'resources-description': 'Resources Description';
    'resources-title': 'Resources';
    'settings-description': 'Settings Page';
    'settings-title': 'Settings';
    'shop-description': 'Shop Description';
    'shop-title': 'Shop';
    'sign-in-description': 'Sign In Page';
    'sign-in-title': 'Sign In';
    'sign-up-description': 'Sign Up Page';
    'sign-up-title': 'Sign Up';
    'site-description': 'Boilerplate for Next.js application';
    'site-title': 'Next.js Boilerplate';
    'terms-and-privacy-description': 'Terms and Privacy Page';
    'terms-and-privacy-title': 'Terms and Privacy';
  };
  theme: {
    dark: 'Dark';
    light: 'Light';
    system: 'System';
    'toggle-theme': 'Toggle theme';
  };
  validation: {
    'email-invalid': 'Email is invalid';
    'email-required': 'Email is required';
    'name-required': 'Name is required';
    'password-required': 'Password is required';
  };
}

export default Resources;
