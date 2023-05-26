    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

      // function generateKey(length, characters) {
      //   let key = '';
      //   while (key.length < length) {
      //     const randomIndex = Math.floor(Math.random() * characters.length)
      //     key += characters[randomIndex];
      //   }
      //   return key
      // }

      function generateKey(length, characters) {
        let key = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length)
          key += characters[randomIndex];
        }
        return key
      }

      const key = generateKey(16, characters);
      console.log(key);
