import React from "react";

function Card({username = "HC" , post="Not assigned" , url="" , myArr=[]}) {
    //console.log(props)
  return (
    <div>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
          src={url}
          alt=""
          width="384"
          height="512"
        />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis incidunt voluptatum voluptatem quisquam commodi unde
              veritatis in! Placeat, odit fugit molestiae nobis, accusantium
              molestias amet, quia animi nulla hic a.
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">{username}</div>
            <div clasNames="text-slate-700 dark:text-slate-500">
              {post}
            </div>
            <div>
              <h1>{myArr[2]}</h1>
            </div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default Card;
