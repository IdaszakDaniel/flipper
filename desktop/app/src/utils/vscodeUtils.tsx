/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {getPreferredEditorUriScheme} from '../fb-stubs/user';
import {shell} from 'electron';

const preferredEditorUriScheme: Promise<string> = getPreferredEditorUriScheme();

export function callVSCode(plugin: string, command: string, params?: string) {
  getVSCodeUrl(plugin, command, params).then((url) => shell.openExternal(url));
}

export async function getVSCodeUrl(
  plugin: string,
  command: string,
  params?: string,
): Promise<string> {
  return `${await preferredEditorUriScheme}://${plugin}/${command}${
    params == null ? '' : `?${params}`
  }`;
}
