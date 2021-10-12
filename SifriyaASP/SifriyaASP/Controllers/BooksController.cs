using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SifriyaASP.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {       
        private readonly ILogger<BooksController> _logger;

        public BooksController(ILogger<BooksController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            IList<Book> books = new List<Book>();

            books.Add(new Book
            {
                PublishedDate = new DateTime(2001), 
                Author = "Name 1", 
                 PictureUrl= "https://picsum.photos/200",
                  Summary= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus tincidunt risus, ut pellentesque quam. Cras nec nibh sit amet lorem luctus molestie eu eget est. Sed et libero molestie, vulputate sapien non, rutrum massa. Proin neque libero, euismod faucibus nisi sit amet, convallis lacinia lacus. Pellentesque porttitor eget leo ac elementum. Aliquam tristique dui mattis mi pretium, at finibus justo auctor. Integer ut ultricies erat, sit amet ultrices metus. ",
                   Title="Title 1"
                
            });
            books.Add(new Book
            {
                PublishedDate = new DateTime(2002),
                Author = "Name 2",
                PictureUrl = "https://picsum.photos/200",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus tincidunt risus, ut pellentesque quam. Cras nec nibh sit amet lorem luctus molestie eu eget est. Sed et libero molestie, vulputate sapien non, rutrum massa. Proin neque libero, euismod faucibus nisi sit amet, convallis lacinia lacus. Pellentesque porttitor eget leo ac elementum. Aliquam tristique dui mattis mi pretium, at finibus justo auctor. Integer ut ultricies erat, sit amet ultrices metus. ",
                Title = "Title 2"

            });
            books.Add(new Book
            {
                PublishedDate = new DateTime(2003),
                Author = "Name 3",
                PictureUrl = "https://picsum.photos/200",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus tincidunt risus, ut pellentesque quam. Cras nec nibh sit amet lorem luctus molestie eu eget est. Sed et libero molestie, vulputate sapien non, rutrum massa. Proin neque libero, euismod faucibus nisi sit amet, convallis lacinia lacus. Pellentesque porttitor eget leo ac elementum. Aliquam tristique dui mattis mi pretium, at finibus justo auctor. Integer ut ultricies erat, sit amet ultrices metus. ",
                Title = "Title 3"

            });
            books.Add(new Book
            {
                PublishedDate = new DateTime(2004),
                Author = "Name 4",
                PictureUrl = "https://picsum.photos/200",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus tincidunt risus, ut pellentesque quam. Cras nec nibh sit amet lorem luctus molestie eu eget est. Sed et libero molestie, vulputate sapien non, rutrum massa. Proin neque libero, euismod faucibus nisi sit amet, convallis lacinia lacus. Pellentesque porttitor eget leo ac elementum. Aliquam tristique dui mattis mi pretium, at finibus justo auctor. Integer ut ultricies erat, sit amet ultrices metus. ",
                Title = "Title 4"

            });
            books.Add(new Book
            {
                PublishedDate = new DateTime(2005),
                Author = "Name 5",
                PictureUrl = "https://picsum.photos/200",
                Summary = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rhoncus tincidunt risus, ut pellentesque quam. Cras nec nibh sit amet lorem luctus molestie eu eget est. Sed et libero molestie, vulputate sapien non, rutrum massa. Proin neque libero, euismod faucibus nisi sit amet, convallis lacinia lacus. Pellentesque porttitor eget leo ac elementum. Aliquam tristique dui mattis mi pretium, at finibus justo auctor. Integer ut ultricies erat, sit amet ultrices metus. ",
                Title = "Title 5"

            });
            return books;
        }
    }
}
