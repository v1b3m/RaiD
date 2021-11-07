# RaiD

RaiD is an application that enables specialists to automatically analyze images of radiographs to detect abnormalities.

## Installation

### Front-end

To get the front-end application up and running, follow the steps below:

1. Ensure you have node.js running on your system.  
   Please go to [Node.js](https://nodejs.org/en/) to download and install node.js.

2. Install node_modules:
   Run yarn install in the `root` directory of the application.

   ```sh
    yarn install
   ```

3. Run the application:
   Run yarn dev in the `root/raid-fe` directory of the application.

   ```sh
    yarn dev
   ```

### Back-end

To get the backend application up and running, follow the steps below:

1. Ensure you have Python version >=3.6

2. Create and activate a virtual environment in the `root` directory

   ```sh
   # Create virtual environment
   python3 -m venv venv
   # Activate virtual environment
   source venv/bin/activate
   ```

3. Install all dependencies

   ```sh
   pip install -r requirements.txt
   ```

4. Change to the `raid-be` directory and create a `.env` file. Copy the environment variables from `.env_example` and add the appropriate values

   ```sh
   # Change to the raid-be directory
   cd raid-be
   # Source the environment variables
   source .env
   ```

5. Run server locally

   ```sh
   python manage.py runserver
   ```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
