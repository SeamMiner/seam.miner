<template>
  <div class="competition">
    <div class="time">
      {{ t(`Home.projects.decriptions.${project.id}.type`) || project.type }}
      <br />
      <span>{{ project.dateStart }}</span
      >&mdash;&nbsp;<span :class="{ now: !project.dateEnd }">{{
        project.dateEnd || t(`Home.projects.now`)
      }}</span>
    </div>
    <div class="topic">
      <h2>
        {{
          t(`Home.projects.decriptions.${project.id}.description`) ||
          project.description
        }}
      </h2>
      <p>
        {{
          t(`Home.projects.decriptions.${project.id}.specialty`) ||
          project.specialty
        }}
      </p>
    </div>
    <div class="link">
      <img
        :src="require(`@/assets/img/projects/${project.img}`)"
        alt="Huh, I guess u've bad internet connection"
      />
      <a v-if="project.link" :href="project.link">{{
        t(`Home.projects.open`)
      }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  props: ["project"],
  setup() {
    const { t } = useI18n();
    return {
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
.competition {
  padding: 4rem 0 8.75rem;
  display: grid;
  justify-content: space-between;
  grid: "time topic link" / minmax(max-content, 200px) minmax(auto, 600px) minmax(
      max-content,
      200px
    );
  gap: 1rem;

  @media (max-width: 768px) {
    grid:
      "link"
      "topic"
      "time" / auto;
  }

  .time {
    grid-area: time;
    font-size: 1.25rem;

    .now::after {
      content: "";
      height: 24px;
      width: 24px;
      margin-left: 0.25rem;
      position: absolute;
      background: url('data:image/svg+xml,\
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">\
        <circle cx="12" cy="12" r="4" fill="%23C7C789"/>\
        <circle cx="12" cy="12" r="9" fill="%23C7C789" opacity="0.2" />\
      </svg>');
    }
  }

  .topic {
    grid-area: topic;

    > h2 {
      margin-top: 0;
      letter-spacing: -0.04em;
      font-weight: 500;
      font-size: 2.5rem;
      line-height: 3rem;
    }

    > p {
      letter-spacing: -0.025em;
    }
  }

  .link {
    grid-area: link;
    display: flex;
    gap: 0.75rem;
    align-items: flex-start;
    justify-content: flex-end;

    @media (max-width: 992px) {
      justify-content: flex-start;
    }

    > img {
      height: 2.875rem;
      width: 2.875rem;
      border-radius: 50%;
    }

    > a {
      padding: 0.5rem 1rem 0.5625rem;
      background: var(--selector);
      border-radius: 100px;
      color: var(--selector-text);
      text-decoration: none;
      transition: all 0.15s ease-in-out;

      &:hover,
      &:focus {
        opacity: 0.9;
      }

      &:focus {
        box-shadow: 0 0 0 4px var(--selector);
      }
    }
  }
}
</style>
