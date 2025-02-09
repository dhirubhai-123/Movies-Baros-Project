import React from 'react';

const FNQs = () => {
    return (
        <div>
            <div className='py-3 text-xl sm:text-2xl md:text-3xl text-center'>
                <header>
                    Frequently Asked
                </header>
            </div>
            <div className="flex flex-col md:flex-row md:flex-wrap p-4 my-2 ">
                <div className="collapse collapse-plus my-2 bg-base-200 w-full md:w-1/2 border-b border-slate-400">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What is MoviesBaros?</div>
                    <div className="collapse-content">
                        <p>MoviesBaros is a website and web app where you can browse hundreds of movies, create your own playlists, and find streaming links to watch movies on various platforms.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus my-2 bg-base-200 w-full md:w-1/2 border-b border-slate-400">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">How do I create a movie playlist?
                    </div>
                    <div className="collapse-content">
                        <p>Simply sign up or log in, browse the movies, and add your favorites to a playlist by clicking the "Add to Playlist" button.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus my-2  bg-base-200 w-full md:w-1/2 border-b border-slate-400">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Can I watch movies directly on MoviesBaros?</div>
                    <div className="collapse-content">
                        <p>No, MoviesBaros does not host movies directly. Instead, we provide links to various streaming platforms where the movies are available.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus  my-2 bg-base-200 w-full md:w-1/2 border-b border-slate-400">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Is MoviesBaros free to use?</div>
                    <div className="collapse-content">
                        <p>Yes, browsing movies and creating playlists on MoviesBaros is free. However, you may need a subscription to the streaming platforms to watch the movies.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus  my-2 bg-base-200 w-full md:w-1/2 border-b border-slate-400">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">How often is the movie database updated?</div>
                    <div className="collapse-content">
                        <p>Our movie database is updated regularly to include the latest releases and keep the information up-to-date.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus  my-2 bg-base-200 w-full md:w-1/2 border-b border-slate-400">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Can I share my playlists with friends?</div>
                    <div className="collapse-content">
                        <p>Absolutely! You can share your playlists with friends by using the share options provided on the playlist page.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus  my-2 bg-base-200 w-full md:w-1/2 border-b border-slate-400">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What streaming platforms are supported?</div>
                    <div className="collapse-content">
                        <p>MoviesBaros supports links to popular streaming platforms such as Netflix, Amazon Prime, Disney+, Hulu, and many others.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FNQs;
