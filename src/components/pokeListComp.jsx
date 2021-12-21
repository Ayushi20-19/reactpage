import React, { Suspense } from "react";

const PokeCard = React.lazy(() => import("./pokeCard"));

export default function pokeListComp({ poke }) {
  return (
    <div className='menu'>
      {poke.map((f) => (
        <Suspense
          key={f.id}
          fallback={
            <div
              style={{
                color: "#777",
                height: "268px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className='menu-item'>
              Loading...
            </div>
          }>
          <PokeCard key={f.id} item={f} />
        </Suspense>
      ))}
    </div>
  );
}
