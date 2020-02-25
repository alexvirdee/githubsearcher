class GitHub {
  constructor() {
    (this.client_id = '0eca7c9ef967e0435999'),
      (this.client_secret = '56ae4f64212f0b8f9bf3b101e68ee7ff50249def');
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
