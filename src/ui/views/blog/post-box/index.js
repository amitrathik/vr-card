const PostBox = (post) => {
return (`<div class="grid-item">
<article class="post-box">
	<div class="post-media">
		<div class="post-image">
			<a href="${post.link}">
				<img src="${post.image}" alt="">
				${post.type == 'video' ? '<span class="post-type-icon"><i class="rsicon rsicon-play"></i></span>' : ''}
			</a>
		</div>
	</div>

	<div class="post-data">
		<time class="post-datetime" datetime="${post.date}">			
			<span class="day">04</span>
			<span class="month">MAY</span>
		</time>

		<div class="post-tag">
			<% post.tags.forEach(function(tag){ %>
				<a href="<%= tag.url %>"><%= tag.label %></a>
			<% }) %>
		</div>

		<h3 class="post-title">
			<a href="<%= post.link %>"><%= post.title %></a>
		</h3>

		<div class="post-info">
			<a href=""><i class="rsicon rsicon-user"></i><%= post.author %></a>
			<a href=""><i class="rsicon rsicon-comments"></i><%= post.comments %></a>
		</div>
	</div>
</article>
</div>`);
}

export default PostBox;