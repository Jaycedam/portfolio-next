export default function AdminHome() {
  return (
    <section>
      <div className="container">
        <div className="space-y-4">
          <h1 className="heading">Dashboard</h1>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            eligendi doloribus obcaecati modi nulla, accusantium cum, eos ipsa
            facilis nesciunt ex aliquam assumenda laudantium, quas est! Quos,
            alias! Veniam modi aliquam nihil odit. Inventore tempore recusandae
            quisquam repellendus exercitationem quaerat iure ipsam ex corporis,
            delectus facere, perspiciatis libero qui fugiat.
          </p>
        </div>
      </div>

      {/* this is where the stats will be, when the vercel analytics API is available
      https://github.com/vercel/analytics/issues/68 */}
    </section>
  );
}
