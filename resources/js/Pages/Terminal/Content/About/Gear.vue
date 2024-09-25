<template>
    <div class="gear">
        <!-- a terminal with line numbers on the left and some text on the right -->
        <div class="editor">
            <div class="line-numbers">
                <!-- vfor every line number to 25 -->
                <div
                    class="line-number"
                    style="margin-right: 10px;"
                    v-for="i in 22"
                >{{ i }}</div>
            </div>
            <div class="text">
                <!-- open template -->
                <div class="line"> {{ open() }}<span class="template">template</span>{{ close() }}</div>

                <!-- open div with class -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp; {{ open() }}<span class="div">div</span> <span
                        class="class">class</span>="<span class="class-name">gear</span>"{{ close() }}<span
                        class="gear">Gear</span>{{
                        open() }}<span class="div">div</span>{{ close() }}</div>

                <!-- computer specs -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ open() }}<span
                        class="p">p</span>{{ close() }}Computer Specs: 16GB RAM, 512GB SSD, 2TB HDD, Intel i7-7700HQ
                    {{ open() }}/<span class="p">p</span>{{ close() }} </div>

                <!-- peripherals -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ open() }}<span
                        class="p">p</span>{{ close() }}Peripherals: Logitech G502, Corsair K70, SteelSeries QcK
                    {{ open() }}/<span class="p">p</span>{{ close() }} </div>

                <!-- software -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ open() }}<span
                        class="p">p</span>{{ close() }}Software: VS Code, Figma, Github/Gitlab, Firefox/Chrome, Spotify
                    {{ open() }}/<span class="p">p</span>{{ close() }} </div>

                <!-- os -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ open() }}<span
                        class="p">p</span>{{ close() }}OS: Ubuntu 24.04 {{ open() }}/<span class="p">p</span>{{ close()
                    }} </div>

                <!-- hosting: hostinger, netlify -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {{ open() }}<span
                        class="p">p</span>{{ close() }}Hosting: Hostinger, Netlify {{ open() }}/<span
                        class="p">p</span>{{
                        close() }} </div>


                <!-- close div -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp; {{ open() }}/<span class="div">div</span>{{ close() }}</div>

                <div class="line"> {{ open() }}/<span class="div">template</span>{{ close() }}</div>

                <br>

                <!-- open script -->
                <div class="line"> {{ open() }}<span class="template">script</span>{{ close() }}</div>

                <!-- export default -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp; <span class="div">export</span> <span
                        class="class">default</span> {</div>

                <!-- name -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="div">name</span>: '<span
                        class="class-name"
                    >Gear</span>',</div>

                <!-- data -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span class="div">data</span>() {
                </div>

                <!-- return -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <span
                        class="div"
                    >return</span> {</div>

                <!-- return data properties -->
                <div class="line">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    loading: <span class="div">false</span>
                </div>

                <!-- close return -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</div>

                <!-- close data -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; }</div>

                <!-- close export -->
                <div class="line">&nbsp;&nbsp;&nbsp;&nbsp; }</div>

                <!-- close script -->
                <div class="line"> {{ open() }}/<span class="template">script</span>{{ close() }}</div>


            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Gear',
    data() {
        return {
        };
    },
    methods: {
        open() {
            return '<'
        },
        close() {
            return '>'
        },
    },
    mounted() {
    },
};
</script>

<style
    lang="scss"
    scoped
>
.gear {
    font-weight: bold;

    .editor {
        display: flex;
        padding: 10px 0;
        color: rgb(212, 212, 212);

        opacity: 0;
        /* animate to fade up forwards */
        animation: fadeInUp 1s ease-out forwards;

        @keyframes fadeInUp {
            from {
                opacity: 0;
            }

            to {
                opacity: 1;
            }
        }

        .text {
            /* animate moving right to left */
            animation: moveRightToLeft 1s ease-out forwards;

            @keyframes moveRightToLeft {
                from {
                    transform: translateX(10%);
                }

                to {
                    transform: translateX(0);
                }
            }
        }

        .line-numbers {
            color: #888;
        }

        .template,
        .div,
        .p {
            color: #ff5e5e;
        }

        .class {
            color: #f7cd43;
        }

        .class-name {
            color: rgb(109, 201, 35);
        }
    }
}
</style>