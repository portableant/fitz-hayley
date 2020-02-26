import LetterPreviewCard from "./LetterPreviewCard.vue";
import "../css/reset.css";
import "../css/global-styles.scss";

export default { title: "LetterPreviewCard" };

export const regular = () => ({
  components: { LetterPreviewCard },
  data: function() {
    return {
      title: "William Hayley to Anna Seward: letter",
      date: "1782-06-11",
      author: { name: "Firstname Lastname", link: "#" },
      recipient: { name: "Firstname Lastname", link: "#" },
      entityCount: {
        people: 5,
        places: 3,
        events: 7
      },
      link: "#"
    };
  },
  template:
    `
    <LetterPreviewCard 
      :title='title' 
      :date='date'
      :author='author' 
      :recipient='recipient' 
      :entityCount='entityCount' 
      :link='link'
    />
    `
});

export const withManyEntityTypes = () => ({
  components: { LetterPreviewCard },
  data: function() {
    return {
      title: "William Hayley to Anna Seward: letter",
      date: "1782-06-11",
      author: { name: "Firstname Lastname", link: "#" },
      recipient: { name: "Firstname Lastname", link: "#" },
      entityCount: {
        people: 2,
        places: 2,
        events: 3,
        families: 1,
        artworks: 3
      },
      link: "#"
    };
  },
  template:
    `
    <LetterPreviewCard 
      :title='title' 
      :date='date'
      :author='author' 
      :recipient='recipient' 
      :entityCount='entityCount' 
      :link='link'
    />
    `
});


export const withNoEntityTypes = () => ({
  components: { LetterPreviewCard },
  data: function() {
    return {
      title: "William Hayley to Anna Seward: letter",
      date: "1782-06-11",
      author: { name: "Firstname Lastname", link: "#" },
      recipient: { name: "Firstname Lastname", link: "#" },
      entityCount: {},
      link: "#"
    };
  },
  template:
    `
    <LetterPreviewCard 
      :title='title' 
      :date='date'
      :author='author' 
      :recipient='recipient' 
      :entityCount='entityCount' 
      :link='link'
    />
    `
});
