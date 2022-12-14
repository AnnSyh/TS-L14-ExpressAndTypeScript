import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form metod='POST'>
      <div>
        <label>Email</label>
        <input name='em' />
      </div>
      <div>
        <label>password</label>
        <input name='pass' type='password' />
      </div>
      <button>Submit</button>
    </form>
  `)
});

router.post('/login', (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email) {
    res.send(email.toUpperCase());
  } else {
    res.send('You must provide an email')
  }
});



export { router };