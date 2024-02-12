import { defineComponent, onErrorCaptured, createVNode } from 'vue';
import { g as createError } from '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-devtools-stub';
import 'axios';
import 'vue/server-renderer';
import 'radix-vue';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import '@radix-icons/vue';

const islandComponents = {};
const islandRenderer = defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${props.context.name}`
      });
    }
    onErrorCaptured((e) => {
      console.log(e);
    });
    return () => createVNode(component || "span", { ...props.context.props, "data-island-uid": "" });
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-WWKCxTBL.mjs.map
