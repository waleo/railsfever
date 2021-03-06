require 'spec_helper'

shared_examples_for "blog entry header" do
		it { should have_selector('article.entry-post') }
		it { should have_selector('article > header.entry-header') }
		it { should have_selector 'article header .byline i.icon-time' }
		it { should have_selector 'article header .byline i.icon-eye-open' }
		it { should have_selector 'article header .byline a' }
		
		it { should have_selector('article > header > div') }
		it { should have_selector('article div.entry-content p') }
end

shared_examples_for "blog show" do
	it { should have_selector('article > header > h1') }
end

describe "Blog" do
	
	let(:blog) {FactoryGirl.create(:blog)}
	
	subject { page }
	
	before do
		visit blogs_path
	end

	describe "index entry" do
		before do 
			9.times { FactoryGirl.create :blog } # needed to trigger pagination
			visit blogs_path
		end

		it_should_behave_like "blog entry header"
		it { should have_selector('article > header > h3') }
		it { should have_selector('article div.entry-content p a.btn.btn-primary', text: 'Read More' ) }
		it { should have_selector('article footer span.blog.date') }
		it { should have_selector('div.pagination.pagination-right.no-margin.pagination-mini ul li a') }
	end

	describe "show" do
		before { visit blog_path(blog.friendly_id) }
		it_should_behave_like "blog entry header"
		it_should_behave_like "blog show"
	end

	describe "change title" do
		before do 
			orig_friendly_id = blog.friendly_id 
			blog.title= "new title #{Random.rand(10000)} and #{Random.rand(10000)}"
			blog.save
			visit blog_path(orig_friendly_id) # visit the old path
		end
		it_should_behave_like "blog entry header"
		it { should have_selector('article > header > h1') }
	end

	describe "previous next navigation" do
		previous = FactoryGirl.create :blog 
		blog = FactoryGirl.create :blog 
		bnext = FactoryGirl.create :blog

		before do
			visit blog_path(blog.friendly_id)
		end
		it { should have_selector('div.entry-pagination ul.pager li') }
		it { should have_link('Older', href: blog_path(previous.friendly_id))}
		it { should have_link('Newer', href: blog_path(bnext.friendly_id) )}
	end

	describe "invisible blog" do
		blog = FactoryGirl.create :blog, visible: false
		before { visit blogs_path }
		it { should_not have_link blog.title, href: blog_path(blog.friendly_id) }

		context "go directly to blog url" do
			before { visit blog_path(blog.friendly_id) }
			it_should_behave_like "blog show"
		end
	end

	describe "views count" do
		before do 
			@view_count = blog.views
			visit blog_path(blog.friendly_id)
		end

		it "should increment" do
			b = Blog.find(blog.id)
			b.views.should == @view_count + 1
		end
	end

	describe "likes count", js: true do
		blog = FactoryGirl.create(:blog) #needed here for now. Fix transactional use of fixtures later
		before do
			visit blog_path(blog.friendly_id)
			text = find(".entry-header .icon-heart + abbr").text
			text.should == "0 Likes" # verify initial state	
		end

		it "should increment after click" do
			find("#like-button").click
			visit blog_path(blog.friendly_id)
			text = find(".entry-header .icon-heart + abbr").text
			text.should == "1 Like"
		end
	end

end
