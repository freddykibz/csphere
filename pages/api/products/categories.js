import nc from 'next-connect';

const handler = nc();

handler.get(async (req, res) => {
  const categories = ['Wheelchairs', 'Commodoes', 'Physiotherapy','Fitness','Labaratory', 'Support','Braces','Hospital Furniture'];
  res.send(categories);
});

export default handler;
