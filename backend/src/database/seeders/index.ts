import dbConnection from '../config/config';
import seedUsers from './user';

dbConnection().then(async () => {
    await seedUsers();
    process.exit()
})
